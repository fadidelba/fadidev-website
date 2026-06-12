export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconColor: string;
  features: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const apps: AppInfo[] = [
  {
    slug: "qrisp",
    name: "Qrisp",
    tagline: "Premium QR & Barcode Scanner",
    description:
      "Scan and create QR codes and barcodes with ease. Qrisp instantly recognizes URLs, WiFi networks, contacts, and more — all while keeping your data private and on-device.",
    iconColor: "#22C997",
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
    slug: "miletally",
    name: "MileTally",
    tagline: "Track miles, cut your taxes",
    description:
      "A local-first iOS mileage-and-expense logbook for US self-employed and gig workers that turns every tap-to-log trip and imported earnings file into a live after-mileage net figure and an accountant-ready Schedule C summary.",
    iconColor: "#2E7D4F",
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
