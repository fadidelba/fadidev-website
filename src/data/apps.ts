export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconColor: string;
  status: "live" | "in-development";
  specs: string[]; // short true facts, rendered as mono labels
  features: string[];
  // The label plate on the home page when this app is featured: short key/value facts.
  plate: [string, string][];
  // Every app has src/app/apps/<slug>/privacy/; terms is optional (a paid app
  // on the standard Apple EULA needs none). The Footer reads this instead of
  // keeping its own slug list. scripts/check-catalog.ts enforces both against disk.
  hasTerms: boolean;
  screenshots?: number; // count of files in /public/apps/<slug>/{1..n}.png
  appStoreUrl?: string;
}

// Newest first: the first live app is the one the home page features.
export const apps: AppInfo[] = [
  {
    slug: "minegrid",
    name: "Mine Grid",
    tagline: "Minesweeper without the guess",
    description:
      "Every board in Mine Grid is checked by a solver before you see it, so it can always be finished with logic — no dead ends, no losing on the last tile because the game wanted a coin flip. Four ways to play, and the boards need no connection.",
    iconColor: "#ef4e41",
    status: "live",
    specs: ["iOS", "free", "plays offline", "7 languages"],
    features: [
      "Never guess — a solver proves every board can be finished with logic",
      "Hints that show the proof — the numbers behind the next safe move light up",
      "Classic mode — Easy to Expert, or build your own board up to 30×50",
      "Journey — endless levels that grow with you, three stars for speed",
      "Rush — two minutes, as many boards as you can clear",
      "Daily — the same puzzle for everyone, every day, with a streak to keep",
      "Game Center leaderboards and achievements, best times for every size",
      "Free, funded by ads between rounds — never during one; one purchase removes them",
      "7 languages supported",
    ],
    plate: [
      ["platform", "iOS 26+"],
      ["price", "free, ad-funded"],
      ["network", "ads only — the boards play offline"],
      ["languages", "7"],
    ],
    hasTerms: false,
    screenshots: 3,
    appStoreUrl: "https://apps.apple.com/app/id6814772012",
  },
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
    plate: [
      ["platform", "iOS 17+"],
      ["price", "free, ad-funded"],
      ["network", "ads only — the puzzles play offline"],
      ["languages", "7"],
    ],
    hasTerms: false,
    screenshots: 3,
    appStoreUrl: "https://apps.apple.com/app/id6759575829",
  },
];
