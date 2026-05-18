# templates/

Source templates consumed by **PipelineKit's `/metadata` agent** (the iOS app pipeline at `~/Documents/Projekte/PipelineKit`).

These files are **not compiled** by Next.js — the `templates/` directory is excluded in `tsconfig.json`.

## Files

- **`privacy.template.tsx`** — TSX template for `src/app/apps/<slug>/privacy/page.tsx`
- **`terms.template.tsx`** — TSX template for `src/app/apps/<slug>/terms/page.tsx`

## Placeholder syntax

- `{{PLACEHOLDER}}` — replaced with a value
- `{{IF feature}} ... {{/IF}}` — conditional section; included only if `feature` is declared in the source app's `pipeline/05-privacy-manifest.md` (privacy) or `pipeline/02-spec.md` (terms)

## Available conditional flags

**Privacy template:** `camera`, `photos`, `notifications`, `healthkit`, `third_party_apis`, `revenuecat`, `native_storekit`, `icloud_sync`

**Terms template:** `freemium`, `subscriptions`, `lifetime`, `refunds`, `third_party_services`

## How the agent uses them

1. Reads source app's `pipeline/02-spec.md` + `05-privacy-manifest.md`
2. Determines which IF flags apply
3. Substitutes placeholders with app-specific content
4. Strips template-only comment headers
5. Writes the final TSX to `src/app/apps/<slug>/{privacy,terms}/page.tsx`
6. Adds the app entry to `src/data/apps.ts`
7. Stops and asks the human to review the diff + commit + push

## Visual reference

The TSX matches the existing Qrisp pattern at `src/app/apps/qrisp/{privacy,terms}/page.tsx`. If you update Qrisp's pages, update these templates accordingly to keep the FadiDev visual style consistent across all apps.

## Why TSX (not Markdown + runtime renderer)?

- No runtime MDX dependency for legal pages
- Each app's page is self-contained and tree-shakable
- Easy to override per-app if needed (e.g., add a custom section)
- Generated pages are first-class TypeScript files that Next.js compiles like any other route
