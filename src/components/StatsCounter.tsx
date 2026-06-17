import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string };

const STATS: Stat[] = [
  { label: "Weddings Crafted", value: 480, suffix: "+" },
  { label: "Happy Families", value: 1200, suffix: "+" },
  { label: "Live Counters", value: 25, suffix: "+" },
  { label: "Years of Love", value: 12, suffix: "" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.25 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [shown]);
  return { ref, shown };
}

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <span className="font-display text-5xl font-semibold gold-text sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  const { ref, shown } = useInView<HTMLDivElement>();
  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl glass-card px-6 py-12 sm:px-10">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} style={{ animationDelay: `${i * 0.1}s` }} className="animate-fade-up">
              {shown ? <Counter to={s.value} suffix={s.suffix} /> : (
                <span className="font-display text-5xl font-semibold gold-text sm:text-6xl">0{s.suffix}</span>
              )}
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
