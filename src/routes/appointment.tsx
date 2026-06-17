import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { supabase } from "@/integrations/supabase/client";
import { EVENTS } from "@/lib/events-data";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Simbells Wedding & Events" },
      { name: "description", content: "Schedule a free planning consultation with Simbells Wedding & Events in Trichy. Tell us about your event and we'll get in touch." },
      { property: "og:title", content: "Book a Planning Appointment — Simbells" },
      { property: "og:description", content: "Schedule a free consultation for your wedding or event." },
    ],
  }),
  component: AppointmentPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(120).or(z.literal("")),
  event_type: z.string().trim().min(2, "Choose an event type").max(60),
  event_date: z.string().max(20).optional(),
  preferred_time: z.string().max(40).optional(),
  location: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1000).optional(),
});

function AppointmentPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const v = parsed.data;
    const { error } = await supabase.from("appointments").insert({
      name: v.name,
      phone: v.phone,
      email: v.email || null,
      event_type: v.event_type,
      event_date: v.event_date || null,
      preferred_time: v.preferred_time || null,
      location: v.location || null,
      message: v.message || null,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't save your appointment. Please try again.");
      return;
    }
    toast.success("Appointment requested! We'll be in touch shortly.");
    setDone(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 pt-14 text-center sm:px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[oklch(0.25_0.06_25)]">
          <CalendarCheck size={22} />
        </div>
        <p className="script-heading mt-4 text-3xl">Book your slot</p>
        <h1 className="mt-1 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Plan your perfect day
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Share a few details and our team will call you back to plan a free studio visit.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="mt-10 rounded-3xl bg-card p-7 shadow-[var(--shadow-petal)] sm:p-10">
          <div className="floral-divider mb-6"><Sparkles size={14} /></div>
          {done ? (
            <div className="py-6 text-center">
              <h2 className="font-display text-2xl text-primary">Thank you!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your appointment request has been saved. We'll reach out on your phone soon.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={() => setDone(false)} className="btn-hero">Book another</button>
                <Link to="/" className="rounded-full border border-input px-6 py-3 text-sm">Home</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name *" name="name" required placeholder="Full name" />
              <Field label="Phone *" name="phone" required type="tel" placeholder="+91 …" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground/80">Event type *</label>
                <select name="event_type" required className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30">
                  <option value="">Choose…</option>
                  {EVENTS.map((e) => <option key={e.slug} value={e.title}>{e.title}</option>)}
                  <option value="Other">Other</option>
                </select>
              </div>
              <Field label="Event date" name="event_date" type="date" />
              <Field label="Preferred time" name="preferred_time" placeholder="e.g. Sat 5 PM" />
              <div className="sm:col-span-2">
                <Field label="Venue / city" name="location" placeholder="Trichy, Chennai…" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-foreground/80">Notes</label>
                <textarea
                  name="message" rows={4} maxLength={1000}
                  placeholder="Tell us about your event, guest count, theme ideas…"
                  className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  Stored privately — only Simbells can view your request.
                </p>
                <button type="submit" disabled={submitting} className="btn-hero">
                  {submitting ? "Sending…" : "Request appointment"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground/80">{label}</label>
      <input
        name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
