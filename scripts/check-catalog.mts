// The app catalog's invariants, made checkable. Everything here used to live in
// someone's head: add an app, forget a folder, and the site 404s silently.
//
// ponytail: node's own assert + fs, no test framework. `npm run check`.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { apps } from "../src/data/apps.ts";
import { notes } from "../src/data/notes.ts";

// AppGlyph is a switch over slugs; read which cases it actually handles.
const glyph = readFileSync("src/components/AppGlyph.tsx", "utf8");
const glyphSlugs = new Set(
  [...glyph.matchAll(/case "([a-z0-9-]+)":/g)].map((m) => m[1]),
);

const slugs = apps.map((a) => a.slug);
assert.equal(new Set(slugs).size, slugs.length, "duplicate slug in the catalog");

for (const app of apps) {
  const where = `${app.name} (${app.slug})`;
  const page = (kind: string) => `src/app/apps/${app.slug}/${kind}/page.tsx`;

  assert.match(app.slug, /^[a-z0-9-]+$/, `${where}: slug must be url-safe`);
  assert.ok(app.specs.length > 0, `${where}: specs is empty`);
  assert.ok(app.features.length > 0, `${where}: features is empty`);

  // Every app detail page links to its privacy page unconditionally.
  assert.ok(existsSync(page("privacy")), `${where}: missing ${page("privacy")}`);

  // The Footer links terms only when hasTerms — so the flag and the disk must agree.
  assert.equal(
    existsSync(page("terms")),
    app.hasTerms,
    `${where}: hasTerms is ${app.hasTerms} but ${page("terms")} ${app.hasTerms ? "does not exist" : "exists"}`,
  );

  // AppGlyph falls back to a plain rounded rect, which looks like a bug, not a choice.
  assert.ok(
    glyphSlugs.has(app.slug),
    `${where}: no case in src/components/AppGlyph.tsx — would render the fallback glyph`,
  );

  // screenshots is a hand-written count of files that must actually be there.
  const dir = `public/apps/${app.slug}`;
  if (app.screenshots) {
    const shots = existsSync(dir)
      ? readdirSync(dir).filter((f) => /^\d+\.png$/.test(f)).length
      : 0;
    assert.equal(
      shots,
      app.screenshots,
      `${where}: screenshots says ${app.screenshots}, ${dir} holds ${shots}`,
    );
  }

  // A live app people can't buy is a dead end.
  if (app.status === "live") {
    assert.ok(app.appStoreUrl, `${where}: status is live but no appStoreUrl`);
  }
}

for (const note of notes) {
  const page = `src/app/writing/${note.slug}/page.tsx`;
  assert.ok(existsSync(page), `note "${note.slug}": missing ${page}`);
  assert.ok(
    slugs.includes(note.app),
    `note "${note.slug}": app "${note.app}" is not in the catalog`,
  );
  assert.match(note.date, /^\d{4}-\d{2}-\d{2}$/, `note "${note.slug}": date must be ISO`);
}

console.log(`catalog ok — ${apps.length} apps, ${notes.length} notes`);
