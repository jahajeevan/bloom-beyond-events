import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Camera } from "lucide-react";
import hero from "@/assets/hero-wedding.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EVENTS, PACKAGES } from "@/lib/events-data";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simbells Wedding & Events — Trichy's Floral Wedding Planners" },
      { name: "description", content: "A-to-Z wedding planning, decoration, photography, entertainment and live experiences in Trichy. You Dream It, We Make It." },
      { property: "og:title", content: "Simbells Wedding & Events — Trichy" },
      { property: "og:description", content: "Floral wedding planning with packages from ₹1 Lakh. Decoration, photography, entertainment and live experiences." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Floral wedding mandap with cascading roses and golden arches"
          width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 sm:py-36">
          <p className="script-heading text-3xl text-[oklch(0.95_0.05_60)] sm:text-4xl">
            You Dream It,
          </p>
          <h1 className="mt-1 font-display text-5xl font-semibold leading-tight text-white sm:text-7xl">
            We Make It Bloom.
          </h1>
          <div className="floral-divider mx-auto mt-6 max-w-xs">
            <Sparkles size={16} />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            From pandhal to pandhi — Simbells crafts weddings, decoration, photography
            and live experiences in Trichy with petals, light and a lot of love.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/appointment" className="btn-hero">
              Book an Appointment <ArrowRight size={16} />
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              View Wedding Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <p className="script-heading text-2xl">A floral story since day one</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
          Six ways we bring your celebration to life
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Tap any service to see what's included — and reserve your date right from the page.
        </p>
      </section>

      {/* Events grid */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e) => (
            <Link
              key={e.slug}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-petal)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.image} alt={e.title}
                  width={1280} height={896} loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[oklch(0.95_0.05_60)]">
                    {e.tagline}
                  </p>
                  <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{e.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent">
                  Explore & register <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Packages teaser */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="script-heading text-2xl">A to Z Wedding Packages</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Starts from ₹1 Lakh
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <div key={p.name} className={`rounded-3xl bg-gradient-to-br ${p.color} p-[2px] shadow-[var(--shadow-soft)]`}>
              <div className="flex h-full flex-col rounded-3xl bg-card p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-accent">{p.tagline}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-primary">{p.name}</h3>
                <p className="mt-1 font-display text-4xl font-semibold text-foreground">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {p.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex gap-2"><Heart size={14} className="mt-0.5 shrink-0 text-accent" />{f}</li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">{p.guests}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/packages" className="btn-hero">See all package details <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-[var(--gradient-gold)] p-10 text-center text-[oklch(0.25_0.06_25)] sm:p-14">
          <Camera className="mx-auto" size={32} />
          <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Let's plan your dream day
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm opacity-90">
            Visit our studio in Tennur, Trichy or book a free planning call with our team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/appointment" className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background">
              Book Appointment
            </Link>
            <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="rounded-full border border-foreground/30 bg-white/40 px-7 py-3 text-sm font-medium">
              Call {SITE.phones[0]}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
