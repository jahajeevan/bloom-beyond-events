import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Crown, Award, Flower2 } from "lucide-react";
import hero from "@/assets/hero-wedding.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingPetals } from "@/components/FloatingPetals";
import { StatsCounter } from "@/components/StatsCounter";
import { Testimonials } from "@/components/Testimonials";
import { InstagramStrip } from "@/components/InstagramStrip";
import { EVENTS, PACKAGES } from "@/lib/events-data";
import { SITE } from "@/lib/site-config";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/5638737/5638737-hd_1920_1080_30fps.mp4";

const PROMISES = [
  { icon: Crown, title: "Luxury, end-to-end", text: "From muhurtham to honeymoon farewell — one team, every detail." },
  { icon: Flower2, title: "Floral artistry", text: "In-house florists craft mandaps and stages that look like couture." },
  { icon: Award, title: "Award-winning team", text: "12 years, 480+ weddings, families that still call us their own." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simbells Wedding & Events — Luxury Floral Wedding Planners in Trichy" },
      { name: "description", content: "A-to-Z luxury wedding planning, decoration, photography, entertainment and live experiences in Trichy. You Dream It, We Make It Bloom." },
      { property: "og:title", content: "Simbells Wedding & Events — Trichy" },
      { property: "og:description", content: "Luxury floral wedding planning. Decoration, cinematic photography, entertainment & live experiences." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      {/* HERO — cinematic video */}
      <section className="relative -mt-[72px] h-[100svh] min-h-[640px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <img
          src={hero}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
        <FloatingPetals count={18} />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
          <span className="eyebrow text-white/80 animate-fade-up">
            <Sparkles size={12} /> Trichy&apos;s Luxury Wedding Atelier
          </span>
          <p className="script-heading mt-4 text-4xl text-[oklch(0.96_0.06_60)] drop-shadow sm:text-5xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            You Dream It,
          </p>
          <h1 className="mt-2 font-display text-6xl font-semibold leading-[1.05] text-white drop-shadow-lg sm:text-8xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We Make It <span className="gold-text">Bloom.</span>
          </h1>
          <div className="floral-divider mx-auto mt-7 max-w-sm text-white/70 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Flower2 size={16} />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            A floral-couture wedding atelier crafting weddings, decoration, photography
            and live experiences in Trichy — with petals, candlelight and a little magic.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Link to="/appointment" className="btn-hero">
              Book a Consultation <ArrowRight size={14} />
            </Link>
            <Link to="/packages" className="btn-ghost-luxe">
              View Wedding Packages
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80">
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/60 p-1">
            <span className="block h-1.5 w-1 rounded-full bg-white animate-float" />
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section className="relative mx-auto -mt-16 max-w-6xl px-4 sm:px-6">
        <div className="glass-card grid gap-6 rounded-3xl p-6 sm:grid-cols-3 sm:p-8">
          {PROMISES.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex items-start gap-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[oklch(0.22_0.06_25)] shadow-[var(--shadow-gold)]">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-24 text-center sm:px-6">
        <p className="eyebrow justify-center">Our Atelier</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Six signature ways we bring your <span className="gold-text">celebration</span> to life
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Tap any service to discover the full story — inclusions, gallery, and a direct way to reserve your date.
        </p>
        <div className="floral-divider mx-auto mt-6 max-w-xs"><Flower2 size={14} /></div>
      </section>

      {/* Events grid */}
      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Link
              key={e.slug}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-luxe)] hover:ring-accent/40 animate-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[oklch(0.93_0.08_60)]">
                    {e.tagline}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-semibold drop-shadow">{e.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/85 transition-all duration-500 group-hover:max-h-32">
                    {e.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.93_0.08_60)]">
                    Explore <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  0{i + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <StatsCounter />

      {/* Packages teaser */}
      <section className="relative mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="eyebrow justify-center">Signature Collections</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-primary sm:text-5xl">
            A-to-Z Wedding Packages
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">Starting from ₹1 Lakh · fully customisable</p>
          <div className="floral-divider mx-auto mt-5 max-w-xs"><Heart size={14} className="fill-current" /></div>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const featured = i === 1;
            return (
              <div
                key={p.name}
                className={`relative rounded-3xl bg-gradient-to-br ${p.color} p-[1.5px] shadow-[var(--shadow-soft)] transition hover:-translate-y-2 hover:shadow-[var(--shadow-luxe)] ${
                  featured ? "md:-mt-6 md:mb-6" : ""
                }`}
              >
                {featured && (
                  <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[var(--gradient-gold)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[oklch(0.22_0.06_25)] shadow-[var(--shadow-gold)]">
                    Most Loved
                  </span>
                )}
                <div className="flex h-full flex-col rounded-3xl bg-card/95 p-8 backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                    {p.tagline}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-primary">{p.name}</h3>
                  <p className="mt-2 font-display text-5xl font-semibold gold-text">{p.price}</p>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {p.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex gap-2">
                        <Heart size={14} className="mt-0.5 shrink-0 fill-current text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-border pt-4 text-xs italic text-muted-foreground">
                    {p.guests}
                  </p>
                  <Link
                    to="/packages"
                    className="mt-6 inline-flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:text-accent"
                  >
                    Explore Package <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link to="/packages" className="btn-hero">
            See all package details <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Testimonials />
      <InstagramStrip />

      {/* Luxury CTA banner */}
      <section className="mx-auto mt-12 max-w-7xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--gradient-luxe)] p-10 text-center shadow-[var(--shadow-luxe)] sm:p-16">
          <FloatingPetals count={10} />
          <div className="relative">
            <p className="eyebrow justify-center text-primary/80">Begin Your Story</p>
            <h3 className="mt-3 font-display text-4xl font-semibold text-primary sm:text-6xl">
              Let&apos;s plan a day you&apos;ll <span className="gold-text">never forget</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/70 sm:text-base">
              Visit our atelier in Tennur, Trichy or book a complimentary planning call. We&apos;ll bring the petals — you bring the dream.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/appointment" className="btn-hero">
                Book Appointment <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/60 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur transition hover:bg-white"
              >
                Call {SITE.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
