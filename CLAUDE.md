# fadidev.app

Static Next.js site: a studio page plus one landing page, privacy policy and
(optionally) terms per iOS app. There is no backend and no database.

`src/data/apps.ts` and `src/data/notes.ts` are the catalog — pages read from
them rather than restating names, taglines or slugs. Run `npm run check`
(`tsc` + `scripts/check-catalog.mts`) after touching either; it fails when the
catalog and the files on disk disagree.

Legal pages are `<LegalPage>` + `<Section>` (`src/components/LegalPage.tsx`);
`templates/` generates new ones. The apps are iOS-only and legal copy must not
claim more privacy than an app actually delivers.

Most apps collect nothing and carry no ads or analytics — but **Knight Grid is
the exception since 2026-08-24**: it went free and now serves Google AdMob ads,
so it sends IP address, device/advertising identifiers, ad and interaction data
and diagnostics to Google, behind a consent dialog. Do not "restore" blanket
no-ads/no-tracking wording for it, on its pages or in the site-wide copy on
`src/app/layout.tsx` and `src/app/page.tsx`.

## Agent skills

### Issue tracker

Issues live in GitHub Issues for `fadidelba/fadidev-website`, via the `gh` CLI. External PRs are not a triage surface. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary — `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
