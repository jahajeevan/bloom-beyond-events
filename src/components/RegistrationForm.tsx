import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SITE } from "@/lib/site-config";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(120).or(z.literal("")),
  eventDate: z.string().max(40).optional(),
  guests: z.string().max(20).optional(),
  location: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1000).optional(),
});

export function RegistrationForm({ eventTitle }: { eventTitle: string }) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const v = parsed.data;
    const lines = [
      `*New Enquiry — ${eventTitle}*`,
      ``,
      `*Name:* ${v.name}`,
      `*Phone:* ${v.phone}`,
      v.email ? `*Email:* ${v.email}` : null,
      v.eventDate ? `*Event date:* ${v.eventDate}` : null,
      v.guests ? `*Guests:* ${v.guests}` : null,
      v.location ? `*Location:* ${v.location}` : null,
      v.message ? `*Message:* ${v.message}` : null,
      ``,
      `— Sent from Simbells website`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — tap Send to confirm your enquiry.");
    setTimeout(() => setSubmitting(false), 600);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Your name *" name="name" required placeholder="Full name" />
      <Field label="Phone *" name="phone" required type="tel" placeholder="+91 …" />
      <Field label="Email" name="email" type="email" placeholder="you@example.com" />
      <Field label="Event date" name="eventDate" type="date" />
      <Field label="Expected guests" name="guests" placeholder="e.g. 250" />
      <Field label="Venue / city" name="location" placeholder="Trichy, Chennai…" />
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-foreground/80">
          Tell us about your event
        </label>
        <textarea
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Share theme ideas, must-haves, budget range…"
          className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Your details will reach us instantly on WhatsApp ({SITE.whatsappDisplay}).
        </p>
        <button type="submit" disabled={submitting} className="btn-hero w-full sm:w-auto">
          {submitting ? "Opening WhatsApp…" : "Register & Send"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground/80">{label}</label>
      <input
        name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
