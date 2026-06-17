import wedding from "@/assets/event-wedding.jpg";
import decor from "@/assets/event-decor.jpg";
import photo from "@/assets/event-photography.jpg";
import entertainment from "@/assets/event-entertainment.jpg";
import occasions from "@/assets/event-occasions.jpg";
import live from "@/assets/event-live.jpg";

export type EventInfo = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  image: string;
  highlights: string[];
  inclusions: string[];
};

export const EVENTS: EventInfo[] = [
  {
    slug: "wedding-planning",
    title: "Wedding Planning",
    tagline: "A to Z weddings, crafted with love",
    short:
      "End-to-end wedding planning — from mandap to muhurtham, we handle every petal so you can savour every moment.",
    image: wedding,
    highlights: [
      "Pandhal, banana tree & floral mandap setup",
      "Stage decoration with garlands & lights",
      "Nadaswaram, Chendamelam & welcome music",
      "Traditional & candid photography + videography",
      "Catering coordination for 100–750 guests",
    ],
    inclusions: [
      "Bridal makeup & saree draping",
      "Welcome girls, dolls & celebrity MC",
      "DJ, dance, magic show & 360° camera",
      "Live counters: ice cream, beeda, popcorn, chaat",
      "Tambulam bags & guest hampers",
    ],
  },
  {
    slug: "decoration-stage",
    title: "Decoration & Stage",
    tagline: "Creative decoration that takes the breath away",
    short:
      "Wedding decor, baby shower, birthday and theme decoration — lighting, audio, pandhal and tent setups included.",
    image: decor,
    highlights: [
      "Floral & theme stage decoration",
      "Baby shower & seemantham setups",
      "Birthday and house warming decor",
      "Lighting & audio design",
      "Pandhal / tent installation",
    ],
    inclusions: [
      "Fresh & artificial floral installations",
      "Backdrop, drapes & chandeliers",
      "Entrance arch & welcome props",
      "Seating arrangement styling",
      "On-site setup & teardown",
    ],
  },
  {
    slug: "photography-film",
    title: "Photography & Film",
    tagline: "Cinematic memories that live forever",
    short:
      "Wedding, birthday, maternity, baby outdoor & corporate shoots with traditional, candid, drone and 360° coverage.",
    image: photo,
    highlights: [
      "Traditional & candid photography",
      "Cinematic videography with drone",
      "Pre-wedding & post-wedding shoots",
      "Maternity & baby outdoor shoots",
      "Premium wedding albums & frames",
    ],
    inclusions: [
      "Silver (₹40,000), Gold (₹60,000), Platinum (₹1,10,000) shoot packages",
      "12×36 / 12×18 wedding albums",
      "Pendrive, calendar & framed prints",
      "360° camera & mirror booth",
      "Same-day highlight reels",
    ],
  },
  {
    slug: "entertainment-shows",
    title: "Entertainment & Shows",
    tagline: "Energy on stage, joy in every guest",
    short:
      "DJ, dance, magic show, light music orchestra, mirror camera, jumping balloon, mascots and game shows for every age.",
    image: entertainment,
    highlights: [
      "DJ, dance & light music orchestra",
      "Magic show & gun shoot",
      "Mirror camera & 360° camera",
      "Jumping balloon & welcome dolls",
      "Celebrity MC & ring throw game shows",
    ],
    inclusions: [
      "Chendamelam & nadaswaram troupe",
      "Welcome entries with mascots",
      "Stage lights & sound systems",
      "Kids' entertainment characters",
      "Corporate event hosting",
    ],
  },
  {
    slug: "events-occasions",
    title: "Events & Occasions",
    tagline: "Every milestone, beautifully celebrated",
    short:
      "Themed birthdays, baby showers, house warming, maternity and grand wedding & corporate event packages.",
    image: occasions,
    highlights: [
      "Themed birthday events",
      "House warming (Grihapravesam)",
      "Baby shower & seemantham",
      "Engagement & reception",
      "Corporate events & inaugurations",
    ],
    inclusions: [
      "Theme-based decoration",
      "Catering & live counters",
      "Welcome kits for guests",
      "Photography & videography",
      "Custom invitations on request",
    ],
  },
  {
    slug: "live-experiences",
    title: "Live Experiences",
    tagline: "Live counters, live music, live joy",
    short:
      "Ice cream, beeda, popcorn, cotton candy, chocolate fountain, mehendi, pencil art and 90's kids stalls.",
    image: live,
    highlights: [
      "Ice cream, popcorn & cotton candy counters",
      "Beeda, fruit salad & chaat stalls",
      "Chocolate fountain & selfie mirror",
      "Mehendi, pencil art & printed balloons",
      "90's kids nostalgia corner",
    ],
    inclusions: [
      "Trained live-counter staff",
      "Hygiene & quality assurance",
      "Themed counter decor",
      "Custom menu on request",
      "Available for any package",
    ],
  },
];

export const PACKAGES = [
  {
    name: "Essentials",
    price: "₹1 Lakh",
    tagline: "Starts From",
    color: "from-[oklch(0.88_0.07_18)] to-[oklch(0.78_0.11_60)]",
    features: [
      "Pandhal, banana tree & light decoration",
      "Stage & entrance decoration",
      "Mangala vadhyam (welcome music)",
      "Traditional photography with album",
      "Tambulam bag (500 guests)",
    ],
    guests: "Day & night meals as per requirement",
  },
  {
    name: "Classic",
    price: "₹3 Lakh",
    tagline: "Most loved",
    color: "from-[oklch(0.78_0.11_60)] to-[oklch(0.55_0.14_22)]",
    features: [
      "Pandhal, banana tree, light & stage decoration",
      "Welcome garland & companion garlands",
      "Iyer, mangala vadhyam",
      "Photography & Videography (Traditional) with album",
      "Tambulam bag (500)",
      "Ice cream, beeda, 360° camera stalls",
    ],
    guests: "Night meal: 100 · Morning: 100 · Lunch: 600",
  },
  {
    name: "Grand",
    price: "₹5 Lakh",
    tagline: "The full Simbells experience",
    color: "from-[oklch(0.55_0.14_22)] to-[oklch(0.35_0.1_22)]",
    features: [
      "Pandhal, banana tree, light & stage decoration",
      "Nuzhumuvai vaayil (entrance) decoration",
      "Nichayadhartha & welcome garlands",
      "Iyer, mangala vadhyam, DJ & dance",
      "Welcome girls & traditional + candid photo/video with album",
      "Tambulam bag (600)",
      "Ice cream, beeda, selfie mirror stalls",
    ],
    guests: "Night meal: 200 · Morning: 200 · Lunch: 750",
  },
];
