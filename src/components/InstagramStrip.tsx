import { Instagram } from "lucide-react";
import { SITE } from "@/lib/site-config";
import wedding from "@/assets/event-wedding.jpg";
import decor from "@/assets/event-decor.jpg";
import photo from "@/assets/event-photography.jpg";
import entertainment from "@/assets/event-entertainment.jpg";
import occasions from "@/assets/event-occasions.jpg";
import live from "@/assets/event-live.jpg";

const TILES = [wedding, decor, photo, entertainment, occasions, live];

export function InstagramStrip() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Follow the petals</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary sm:text-5xl">
          <span className="gold-text">@simbells_event_planner</span>
        </h2>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card/70 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur transition hover:-translate-y-0.5 hover:border-accent"
        >
          <Instagram size={16} /> Follow on Instagram
        </a>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
        {TILES.map((src, i) => (
          <a
            key={i}
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]"
          >
            <img src={src} alt="Simbells Instagram" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <Instagram className="absolute bottom-3 right-3 text-white opacity-0 transition group-hover:opacity-100" size={20} />
          </a>
        ))}
      </div>
    </section>
  );
}
