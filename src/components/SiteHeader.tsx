import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/simbells-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Simbells Wedding & Events" className="h-12 w-12 object-contain" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-xl font-semibold text-primary">SIMBELLS</span>
            <span className="text-[10px] tracking-[0.2em] text-accent-foreground/70">
              WEDDING &amp; EVENTS
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/appointment" className="btn-hero text-sm">
            Book Now
          </Link>
        </nav>
        <button
          aria-label="Toggle menu"
          className="rounded-full p-2 text-primary md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent/20"
                activeProps={{ className: "bg-accent/20 text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 btn-hero text-sm"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
