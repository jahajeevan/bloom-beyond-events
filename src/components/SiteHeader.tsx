import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/simbells-logo.png";
import { SITE } from "@/lib/site-config";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-[0_8px_30px_-12px_rgba(139,58,58,0.18)]" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-[var(--gradient-gold)] opacity-60 blur-md" />
            <img
              src={logo}
              alt="Simbells Wedding & Events"
              className={`relative rounded-full bg-white/90 object-contain ring-1 ring-accent/40 transition-all duration-300 ${
                scrolled ? "h-11 w-11 p-1" : "h-14 w-14 p-1.5"
              }`}
            />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-xl font-semibold tracking-wide text-primary">
              SIMBELLS
            </span>
            <span className="text-[10px] tracking-[0.32em] text-accent-foreground/70">
              WEDDING &amp; EVENTS
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full border border-accent/40 px-3 py-1.5 text-xs font-medium text-primary lg:inline-flex"
          >
            <Phone size={13} /> {SITE.phones[0]}
          </a>
          <Link to="/appointment" className="btn-hero text-xs">
            Book Now
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-full bg-white/70 p-2 text-primary backdrop-blur md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80 hover:bg-accent/20"
                activeProps={{ className: "bg-accent/20 text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 btn-hero text-xs"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
