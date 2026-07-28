export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconColor: string;
  status: "live" | "in-development";
  specs: string[]; // short true facts, rendered as mono labels
  features: string[];
  // Every app has src/app/apps/<slug>/privacy/; terms is optional (a paid app
  // on the standard Apple EULA needs none). The Footer reads this instead of
  // keeping its own slug list. scripts/check-catalog.ts enforces both against disk.
  hasTerms: boolean;
  screenshots?: number; // count of files in /public/apps/<slug>/{1..n}.png
  appStoreUrl?: string;
}

export const apps: AppInfo[] = [
  {
    slug: "knightgrid",
    name: "Knight Grid",
    tagline: "Solve the Knight's Tour",
    description:
      "Master the Knight's Tour — the centuries-old chess puzzle where a lone knight must land on every square of the board exactly once. Three ways to play, boards from 5×5 to 10×10, fully offline.",
    iconColor: "#149a57",
    status: "live",
    specs: ["iOS", "€1.99 once", "offline", "7 languages"],
    features: [
      "Puzzle mode — solve it yourself with instant feedback and unlimited undo",
      "Mission mode — beat the clock across three rounds, from 6×6 to 8×8",
      "Solution mode — watch the solver reveal a perfect path step by step, at any speed",
      "Any board from 5×5 up to 10×10, any starting square",
      "No ads, no accounts, no tracking — works fully offline",
      "Light and dark themes",
      "Accessible: Dynamic Type and VoiceOver",
      "7 languages supported",
    ],
    hasTerms: false,
    screenshots: 3,
    appStoreUrl: "https://apps.apple.com/app/id6759575829",
  },
  {
    slug: "qrisp",
    name: "Qrisp",
    tagline: "A QR scanner that minds its own business",
    description:
      "Point it at any QR code or barcode and it tells you what it is — a URL, a Wi-Fi network, a contact, a product — without sending a single byte off your phone. It creates codes too.",
    iconColor: "#22C997",
    status: "in-development",
    specs: ["iOS", "on-device", "no account", "4 languages"],
    features: [
      "Scans QR codes and 19 barcode formats — EAN, UPC, Code 128, DataMatrix, PDF417, GS1 DataBar, Codabar and more",
      "Recognises what a code means — URL, Wi-Fi, contact, calendar event, SEPA transfer — and offers the one action that fits",
      "Warns before opening a shortened or suspicious link, with the real destination spelled out",
      "Creates codes for 12 content types with a live preview",
      "Designs them: 40 templates, gradients, module shapes, frames and 24 logos (5 templates and 10 logos are free)",
      "Saved codes stay editable — the design is stored, not a flattened image",
      "Product lookup for food and cosmetics barcodes via Open Food Facts and Open Beauty Facts",
      "One library for scanned and created codes, with search and favourites; export as CSV or TXT",
      "Reads codes from photos in your library",
      "Vector export as SVG and PDF, plus 4K PNG (Pro)",
      "Batch generator — a pasted list becomes many codes and one printable PDF (Pro)",
      "Business Scanner — check off a guest list, count stock or verify tickets hands-free, with a CSV report (Pro)",
      "Privacy-first: no account, no tracking, no ads; code content never leaves the device",
      "German, English, Spanish and French; light, dark and system themes",
    ],
    hasTerms: true,
  },
  {
    slug: "quietnights",
    name: "QuietNights",
    tagline: "Watches the noise, never records a sound",
    description:
      "A calm, on-device nursery sound monitor that brackets each nap or night into a session and hands you a plain-language morning verdict on whether noise threatened your baby's sleep.",
    iconColor: "#D97706",
    status: "in-development",
    specs: ["iOS", "on-device", "no audio recorded"],
    features: [
      "Live decibel reading with a soft breathing gauge that dims for the nightstand",
      "Pediatric threshold presets (AAP safe-sleep, hearing-safe) or a custom limit",
      "Silent log entry the instant noise crosses your line — no chime that wakes the baby",
      "Morning Report Card — a color-coded verdict with quiet hours, spikes, and peak dB",
      "White-noise spot-check: a guided 10-second test against a 65 dB ceiling",
      "Night history and 7- & 30-night trend charts (Pro)",
      "Weekly insights and night-over-night comparison (Pro)",
      "iCloud sync across your devices (Pro)",
      "Shareable PDF reports for a partner or pediatrician (Pro)",
      "Privacy-first: on-device only, no account, no audio ever recorded",
    ],
    hasTerms: true,
  },
  {
    slug: "miletally",
    name: "MileTally",
    tagline: "Track miles, cut your taxes",
    description:
      "A local-first iOS mileage-and-expense logbook for US self-employed and gig workers that turns every tap-to-log trip and imported earnings file into a live after-mileage net figure and an accountant-ready Schedule C summary.",
    iconColor: "#2E7D4F",
    status: "in-development",
    specs: ["iOS", "local-first", "Schedule C export"],
    features: [
      "One-Tap Trip Logging",
      "Swipe Classifier",
      "IRS Mileage Deduction Engine",
      "Expense Log (mileage-method aware)",
      "Per-Platform P&L Dashboard",
      "CSV Earnings Import",
      "Schedule C PDF Export",
    ],
    hasTerms: true,
  },
  {
    slug: "dardarija",
    name: "Dar Darija",
    tagline: "Learn Moroccan Arabic as a family",
    description:
      "A family app for learning Darija (Moroccan Arabic) together — three age-appropriate modes over one shared vocabulary, from age 4 to grown-ups. Not a solo drill trainer but a shared house: progress belongs to the family, parents listen back to their kids' recordings, and conversation prompts push you out of the app and onto the actual dinner table. Offline, no account, no ads.",
    iconColor: "oklch(70% 0.16 165)",
    status: "in-development",
    specs: ["iOS", "offline", "no account", "ages 4+"],
    features: [
      "Explore mode",
      "Adventure mode",
      "Recordings with a parent's thumbs-up",
      "Invisible spaced repetition",
      "Shared family progress",
      "Conversation prompts for the dinner table",
    ],
    hasTerms: true,
  },
];
