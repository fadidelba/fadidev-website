export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconColor: string;
  status: "live" | "in-development";
  specs: string[]; // short true facts, rendered as mono labels
  features: string[];
  screenshots?: number; // count of files in /public/apps/<slug>/{1..n}.png
  appStoreUrl?: string;
  playStoreUrl?: string;
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
    specs: ["iOS", "on-device", "14 languages"],
    features: [
      "Scan QR codes and barcodes instantly with your camera",
      "Auto-detect URLs, WiFi, contacts, emails, phone numbers, and more",
      "Create custom QR codes for URLs, text, WiFi, contacts, and emails",
      "Product and book lookup for scanned barcodes",
      "Scan history with favorites, tags, and search",
      "Batch scanning mode for scanning multiple codes in a row",
      "Scan from images in your photo library",
      "Export scan history as CSV or TXT",
      "Privacy-first: all data stays on your device",
      "14 languages supported",
      "Dark mode, light mode, and system theme",
    ],
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
  },
];
