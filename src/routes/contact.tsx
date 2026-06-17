import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Simbells Wedding & Events, Trichy" },
      { name: "description", content: "Visit Simbells Wedding & Events at K.P.R.S. Towers, Tennur High Road, Tennur, Trichy 620017. Call, WhatsApp or follow us on Instagram." },
      { property: "og:title", content: "Contact Simbells Wedding & Events" },
      { property: "og:description", content: "Studio at Tennur, Trichy. Call, WhatsApp or follow on Instagram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 text-center sm:px-6">
        <p className="script-heading text-3xl">Come say hello</p>
        <h1 className="mt-1 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Visit our studio in Trichy
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Sit with us over coffee, leaf through albums and dream up your event together.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5">
          <InfoRow icon={MapPin} title="Address">
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
              {SITE.address}
            </a>
          </InfoRow>
          <InfoRow icon={Phone} title="Phone">
            {SITE.phones.map((p) => (
              <div key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">{p}</a>
              </div>
            ))}
            <div className="mt-1 text-xs text-muted-foreground">
              WhatsApp: <a className="text-accent" href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer">{SITE.whatsappDisplay}</a>
            </div>
          </InfoRow>
          <InfoRow icon={Clock} title="Studio hours">
            Monday – Saturday · 10:00 AM – 8:00 PM<br />
            Sunday · by appointment
          </InfoRow>
          <InfoRow icon={Instagram} title="Instagram">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
              @simbells_event_planner
            </a>
          </InfoRow>
          <InfoRow icon={Facebook} title="Facebook">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-primary">
              simbells_events
            </a>
          </InfoRow>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
          <iframe
            title="Simbells location"
            src={SITE.mapsEmbed}
            className="h-[440px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ComponentType<{ size?: number }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[oklch(0.25_0.06_25)]">
        <Icon size={18} />
      </div>
      <div>
        <p className="font-display text-lg text-primary">{title}</p>
        <div className="mt-0.5 text-sm text-foreground/80">{children}</div>
      </div>
    </div>
  );
}
