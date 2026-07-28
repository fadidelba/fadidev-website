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

**Terms template:** `freemium`, `subscriptions`, `lifetime` (one-time option NEXT TO a subscription), `lifetime_only` (one-time purchase is the ONLY paid tier — the standard FadiDev model), `refunds`, `third_party_services`, `premium_description` (an extra sentence appended to Description of Service)

There is no other conditional syntax. Every conditional is a `{{IF x}} … {{/IF}}` pair with `x` listed above — an inline, unclosed `{{IF_SOMETHING}}` token is a bug, not a feature. One of those once collided with a hard-coded period and shipped a visible `..` in Dar Darija's terms.

> Consumers: PipelineKit's `/metadata` agent (historic) and **exopilot** (`scripts/website-pages.ts` — deterministic substitution from the appranker brief + project facts, runs inside the aso phase).

## How the agent uses them

1. Reads source app's `pipeline/02-spec.md` + `05-privacy-manifest.md`
2. Determines which IF flags apply
3. Substitutes placeholders with app-specific content
4. Strips template-only comment headers
5. Collapses the blank lines left behind by removed `{{IF}}` blocks
6. Adds the app entry to `src/data/apps.ts` **first** — including `hasTerms` — because the page derives its back-link and subtitle from it
7. Writes the final TSX to `src/app/apps/<slug>/{privacy,terms}/page.tsx`
8. Runs `npm run check` — it verifies the entry against the folders on disk, the glyph switch, and the screenshot count
9. Stops and asks the human to review the diff + commit + push

## Visual reference

There is none to keep in sync. The page chrome lives in `src/components/LegalPage.tsx` and these templates emit only `<Section>` blocks, so a style change happens in one file and reaches every legal page at once. Do not copy wrapper divs, back-links or headings back into a template — that is what let the pages drift apart before (`pt-36` vs `pt-16`, three date formats, three class strings for the same email link).

## Why TSX (not Markdown + runtime renderer)?

- No runtime MDX dependency for legal pages
- Each app's page is self-contained and tree-shakable
- Easy to override per-app if needed (e.g., add a custom section)
- Generated pages are first-class TypeScript files that Next.js compiles like any other route
