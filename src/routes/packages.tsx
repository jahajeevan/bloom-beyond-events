import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PACKAGES } from "@/lib/events-data";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Wedding Packages — Simbells Wedding & Events" },
      { name: "description", content: "A-to-Z wedding packages from ₹1 Lakh, ₹3 Lakh and ₹5 Lakh — pandhal, decoration, music, photography and catering included." },
      { property: "og:title", content: "Wedding Packages from ₹1 Lakh" },
      { property: "og:description", content: "Three curated wedding packages by Simbells, Trichy." },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-10 text-center sm:px-6">
        <p className="script-heading text-3xl">A to Z Wedding Packages</p>
        <h1 className="mt-1 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Three ways to celebrate
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Pick a starting point — every package is fully customisable to your family's traditions.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-7 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-3xl bg-gradient-to-br ${p.color} p-[2px] shadow-[var(--shadow-soft)] ${i === 1 ? "lg:-mt-4" : ""}`}
            >
              <div className="flex h-full flex-col rounded-3xl bg-card p-8">
                {i === 1 && (
                  <span className="mb-4 inline-flex self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                    Most loved
                  </span>
                )}
                <p className="text-xs uppercase tracking-[0.25em] text-accent">{p.tagline}</p>
                <h2 className="mt-1 font-display text-3xl font-semibold text-primary">{p.name}</h2>
                <p className="mt-2 font-display text-5xl font-semibold text-foreground">{p.price}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{f}</li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-[var(--gradient-petal)] p-3 text-xs text-foreground/80">
                  <Heart size={12} className="mr-1 inline text-accent" />{p.guests}
                </p>
                <Link to="/appointment" className="btn-hero mt-7 self-stretch justify-center">
                  Reserve this package
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Packages can be tailored to your guest count, theme and budget. Talk to us!
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
