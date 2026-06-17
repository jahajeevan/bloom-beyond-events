import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RegistrationForm } from "@/components/RegistrationForm";
import { EVENTS, type EventInfo } from "@/lib/events-data";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }): { event: EventInfo } => {
    const event = EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title} — Simbells Wedding & Events` },
          { name: "description", content: loaderData.event.short },
          { property: "og:title", content: `${loaderData.event.title} — Simbells` },
          { property: "og:description", content: loaderData.event.short },
          { property: "og:image", content: loaderData.event.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-primary">Event not found</h1>
        <Link to="/" className="btn-hero mt-6 inline-flex">Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-primary">Couldn't load this event</h1>
        <button onClick={reset} className="btn-hero mt-6">Try again</button>
      </div>
    </div>
  ),
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <img
          src={event.image} alt={event.title}
          width={1280} height={896}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={14} /> All services
          </Link>
          <p className="script-heading mt-4 text-3xl text-[oklch(0.95_0.05_60)]">{event.tagline}</p>
          <h1 className="mt-1 font-display text-4xl font-semibold text-white sm:text-6xl">
            {event.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{event.short}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div className="rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)]">
          <p className="script-heading text-2xl">Highlights</p>
          <h2 className="mt-1 font-display text-2xl text-primary">What's included</h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {event.highlights.map((h: string) => (
              <li key={h} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{h}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-[var(--gradient-petal)] p-7">
          <p className="script-heading text-2xl">More on offer</p>
          <h2 className="mt-1 font-display text-2xl text-primary">Pair it with</h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {event.inclusions.map((h: string) => (
              <li key={h} className="flex gap-2.5"><Sparkles size={14} className="mt-1 shrink-0 text-accent" />{h}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <div className="rounded-3xl bg-card p-7 shadow-[var(--shadow-petal)] sm:p-10">
          <div className="text-center">
            <p className="script-heading text-2xl">Reserve your date</p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Register for {event.title}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Fill in your details — we'll receive them on WhatsApp instantly and confirm within a few hours.
            </p>
            <div className="floral-divider mx-auto my-6 max-w-xs"><Sparkles size={14} /></div>
          </div>
          <RegistrationForm eventTitle={event.title} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
