import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import logo from "@/assets/simbells-logo.png";
import { SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[var(--gradient-petal)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 object-contain" />
            <div>
              <p className="font-display text-2xl font-semibold text-primary">SIMBELLS</p>
              <p className="text-xs tracking-[0.25em] text-accent-foreground/70">
                WEDDING &amp; EVENTS
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {SITE.tagline} From pandhal to pandhi, we craft weddings and celebrations
            that your family will remember forever.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-card p-2.5 text-primary shadow-sm transition hover:-translate-y-0.5 hover:text-accent"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-card p-2.5 text-primary shadow-sm transition hover:-translate-y-0.5 hover:text-accent"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/packages" className="hover:text-primary">Wedding Packages</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/appointment" className="hover:text-primary">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact &amp; Location</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-primary">Get in touch</h4>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            {SITE.phones.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 text-accent" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">{p}</a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 text-accent" />
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
                {SITE.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Simbells Wedding &amp; Events. Crafted with love in Trichy.
        </p>
      </div>
    </footer>
  );
}
