# FadiDev — Website Briefing

## What To Build

Build a clean, modern, professional developer portfolio website for "FadiDev" — an indie app studio that builds iOS and Android apps. The website serves as the central hub for all apps, with support pages, privacy policy, and terms of service.

Use **Next.js** with the App Router and **Tailwind CSS**. The site must be static-exportable for Vercel deployment.

---

## Tech Stack

- Next.js (latest, App Router)
- Tailwind CSS
- TypeScript
- Static export (output: 'export' in next.config)
- No backend, no database, no CMS

---

## Pages

### 1. Homepage (/)
- Hero section: "FadiDev" logo/name, tagline "Crafting beautiful apps for iOS & Android"
- Brief intro: indie app studio, focused on premium mobile experiences
- "Our Apps" section: grid of app cards (empty for now, with placeholder structure for adding apps later)
- Each app card: icon placeholder, app name, short description, App Store + Play Store badge links
- Clean footer with links to Privacy, Terms, Support, and email

### 2. Apps Landing Template (/apps/[slug])
- Create ONE template page that can be reused for every app
- Hero: app icon, app name, tagline
- Screenshots section (placeholder images for now)
- Features list
- Download badges (App Store + Google Play)
- Links to Privacy Policy and Support
- This page will be duplicated/customized for each new app

### 3. Privacy Policy (/privacy)
- Standard privacy policy for mobile apps
- Covers: data collection, usage, third-party services, children's privacy (COPPA), analytics, advertising
- Placeholder for app-specific sections
- Must mention: no personal data sold, minimal data collection, analytics for app improvement only
- Include contact email: support@fadidev.app

### 4. Terms of Service (/terms)
- Standard terms of service for mobile apps
- Covers: subscription terms, auto-renewal, cancellation, refund policy (via Apple/Google), intellectual property, liability limitations
- Include contact email: support@fadidev.app

### 5. Support (/support)
- Simple support page
- Contact email prominently displayed: support@fadidev.app
- FAQ section with common questions:
  - "How do I cancel my subscription?"
  - "How do I restore my purchase?"
  - "The app is not working, what should I do?"
  - "How do I request a refund?"
  - "How do I delete my data?"
- Answers should reference both iOS (Settings → Apple ID → Subscriptions) and Android (Play Store → Subscriptions) steps

---

## Design

- **Style:** Minimalist, clean, modern, professional
- **Background:** White or very light grey (#FAFAFA)
- **Text:** Dark grey/near-black (#111827) for headings, grey (#6B7280) for body
- **Accent color:** One strong accent — use a modern blue (#2563EB) or pick something that feels fresh
- **Typography:** Inter or system fonts via Tailwind — clean and readable
- **Layout:** Centered content, max-width 1200px, generous whitespace
- **Mobile responsive:** Must look great on phone and desktop
- **No flashy animations** — subtle transitions only
- **Dark mode support** would be nice but not required for MVP
- **Footer:** Clean, with Copyright © 2026 FadiDev, and links

---

## Important Notes

- The site must work as a static export (no server-side features)
- Every page must have proper meta tags (title, description, Open Graph)
- Privacy Policy and Terms must look like real, professional legal pages (not placeholder lorem ipsum)
- The app template page should be easy to duplicate for new apps — just copy the folder and change the content
- Include a robots.txt and sitemap.xml
- Include App Store and Google Play download badge images (use placeholder SVGs or official badge URLs)
- The whole site should feel trustworthy — like a real, established app company
- Run `npm run build` before finishing to make sure static export works
