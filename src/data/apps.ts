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
  // To add a new app, copy this block and update the details.
  // To remove this example, delete the object below — but note that the
  // /apps/[slug] route requires at least one entry to build with static export.
  {
    slug: "example-app",
    name: "Example App",
    tagline: "A beautiful example to get you started",
    description:
      "This is a placeholder app entry. Replace it with your real app or add more entries to this array.",
    iconColor: "#2563EB",
    features: [
      "Clean, modern user interface",
      "Works offline with local data storage",
      "Dark mode support",
      "Regular updates and improvements",
    ],
  },
];
