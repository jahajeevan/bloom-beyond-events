import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkles, Camera, Music, Flower2, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/simbells-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Simbells Wedding & Events — Trichy" },
      { name: "description", content: "Meet Simbells Wedding & Events — Trichy's full-service wedding planners specialising in floral decor, photography and live experiences." },
      { property: "og:title", content: "About Simbells Wedding & Events" },
      { property: "og:description", content: "From pandhal to pandhi, we craft weddings and celebrations to be remembered." },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Flower2, title: "Floral first", text: "Every event begins with petals — fresh, fragrant, full of feeling." },
  { icon: Heart, title: "Family feel", text: "We treat every wedding as if it were happening in our own home." },
  { icon: Camera, title: "Cinematic memories", text: "Traditional, candid, drone and 360° — your story preserved." },
  { icon: Music, title: "Joyful energy", text: "Chendamelam, DJ, magic and dance — never a dull minute." },
  { icon: Sparkles, title: "Themed creativity", text: "From classic temple weddings to modern themed birthdays." },
  { icon: Users, title: "Trichy roots", text: "Based in Tennur, serving Trichy and Tamil Nadu since day one." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <img src={logo} alt="Simbells logo" className="mx-auto h-24 w-24 object-contain" />
        <p className="script-heading mt-4 text-3xl">About Us</p>
        <h1 className="mt-1 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Where every detail blooms
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
          Simbells Wedding &amp; Events is a Trichy-based team of decorators, photographers,
          MCs and live-experience curators. We plan A-to-Z weddings, birthdays, baby showers,
          house warmings and corporate events — handling everything from pandhal and stage to
          photography and live counters, so families simply show up and celebrate.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[oklch(0.25_0.06_25)]">
                <v.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-xl text-primary">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 text-center sm:px-6">
        <div className="rounded-3xl bg-[var(--gradient-petal)] p-10 sm:p-14">
          <p className="script-heading text-2xl">Our promise</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-primary sm:text-4xl">
            You Dream It, We Make It.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            One call. One team. Every petal in place — on the day, for the day.
          </p>
          <Link to="/appointment" className="btn-hero mt-7 inline-flex">Book a planning call</Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
