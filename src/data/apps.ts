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
      "Master the Knight's Tour — the centuries-old chess puzzle where a lone knight must land on every square of the board exactly once. Three ways to play, boards from 5×5 to 10×10, and the puzzles need no connection.",
    iconColor: "#149a57",
    status: "live",
    specs: ["iOS", "free", "plays offline", "7 languages"],
    features: [
      "Puzzle mode — solve it yourself with instant feedback and unlimited undo",
      "Mission mode — beat the clock across three rounds, from 6×6 to 8×8",
      "Solution mode — watch the solver reveal a perfect path step by step, at any speed",
      "Any board from 5×5 up to 10×10, any starting square",
      "Free, funded by ads between games — no account, and the puzzles work offline",
      "Light and dark themes",
      "Accessible: Dynamic Type and VoiceOver",
      "7 languages supported",
    ],
    hasTerms: false,
    screenshots: 3,
    appStoreUrl: "https://apps.apple.com/app/id6759575829",
  },
];
