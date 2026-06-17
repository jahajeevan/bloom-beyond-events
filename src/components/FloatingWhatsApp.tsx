import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const msg = encodeURIComponent(
    "Hi Simbells! I'd like to know more about your wedding & event services.",
  );
  return (
    <a
      href={`https://wa.me/${SITE.whatsappNumber}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Simbells on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2"
    >
      <span className="hidden rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-primary shadow-md backdrop-blur sm:inline">
        Chat with us
      </span>
      <span className="relative">
        <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.16_150)]" style={{ animation: "pulse-ring 1.8s ease-out infinite" }} />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-xl ring-4 ring-white/60 transition-transform group-hover:scale-105">
          <MessageCircle size={26} />
        </span>
      </span>
    </a>
  );
}
