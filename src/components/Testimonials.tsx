import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Anitha & Karthik",
    role: "Wedding · Trichy",
    text: "Simbells turned our mandap into a floral dream. Every cousin still talks about the welcome dance and the 360° camera!",
  },
  {
    name: "Meera Subramaniam",
    role: "Seemantham · Tennur",
    text: "From the chendamelam welcome to the chocolate fountain — flawlessly run. They felt like family on the day.",
  },
  {
    name: "Ramesh & Divya",
    role: "Reception · Srirangam",
    text: "The cinematic film they delivered made my parents cry happy tears. Worth every rupee of the Platinum package.",
  },
  {
    name: "Priya Venkatesh",
    role: "Baby Shower · Thillai Nagar",
    text: "Stage decoration was straight out of a magazine. Live counters kept the kids busy and the aunties impressed.",
  },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto mt-8 max-w-7xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <p className="eyebrow justify-center">Kind Words</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Loved by families across Trichy
        </h2>
        <div className="floral-divider mx-auto mt-5 max-w-xs">
          <Star size={14} className="fill-current" />
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {REVIEWS.map((r, i) => (
          <article
            key={r.name}
            className="glass-card animate-fade-up relative rounded-3xl p-7 sm:p-8"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Quote className="absolute right-6 top-6 text-accent/40" size={42} />
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={14} className="fill-current" />
              ))}
            </div>
            <p className="mt-4 font-display text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              &ldquo;{r.text}&rdquo;
            </p>
            <footer className="mt-5 border-t border-border/60 pt-4">
              <p className="font-display text-lg font-semibold text-primary">{r.name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{r.role}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
