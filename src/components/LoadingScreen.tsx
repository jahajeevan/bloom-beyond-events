import { useEffect, useState } from "react";
import logo from "@/assets/simbells-logo.png";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("simbells_loaded") === "1") {
      setVisible(false);
      return;
    }
    const t1 = setTimeout(() => setFading(true), 1400);
    const t2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("simbells_loaded", "1");
    }, 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-600 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.96 0.04 30) 0%, oklch(0.88 0.09 25) 60%, oklch(0.72 0.13 35) 100%)",
      }}
    >
      {/* Petals */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `-${(i * 7) % 30 + 5}%`,
              width: `${8 + (i % 5) * 4}px`,
              height: `${10 + (i % 5) * 5}px`,
              background: `linear-gradient(135deg, oklch(0.92 0.1 ${20 + (i % 8) * 5}), oklch(0.78 0.13 60))`,
              filter: "blur(0.3px)",
              opacity: 0,
              transform: "rotate(0deg)",
              animation: `drift ${6 + (i % 6)}s linear ${i * 0.15}s infinite`,
              borderRadius: "60% 0 60% 0",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <span className="absolute inset-0 -m-6 rounded-full border border-white/60" style={{ animation: "pulse-ring 1.8s ease-out infinite" }} />
          <span className="absolute inset-0 -m-6 rounded-full border border-white/40" style={{ animation: "pulse-ring 1.8s ease-out 0.6s infinite" }} />
          <img
            src={logo}
            alt="Simbells"
            className="relative h-28 w-28 rounded-full bg-white/80 p-3 shadow-2xl animate-bloom"
          />
        </div>
        <p className="script-heading mt-6 text-4xl text-white drop-shadow animate-fade-up">
          Simbells
        </p>
        <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.45em] text-white/85 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          WEDDING &amp; EVENTS
        </p>
      </div>
    </div>
  );
}
