import Link from "next/link";
import { apps } from "@/data/apps";

/*
 * The chrome of a legal document, in one place. Eleven pages used to restate
 * the wrapper, the back-link SVG, the heading and the section shape by hand,
 * and they had already drifted apart (pt-36 vs pt-16, three date formats,
 * three class strings for the same email link).
 *
 * Pass the app slug, not a label and an href: the back-link and the subtitle
 * are read out of the catalog, so they cannot fall behind an app's real name
 * or tagline. Omit it for the site-wide documents, which have no app above them.
 */
export default function LegalPage({
  title,
  lastUpdated,
  app: slug,
  children,
}: {
  title: string;
  lastUpdated: string; // ISO, e.g. "2026-07-28"
  app?: string;
  children: React.ReactNode;
}) {
  const app = slug ? apps.find((a) => a.slug === slug) : undefined;
  if (slug && !app) {
    // Static export: this fails the build rather than shipping a broken back-link.
    throw new Error(`LegalPage: no app in the catalog with slug "${slug}"`);
  }

  return (
    <div className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-3xl">
        {app && (
          <Link
            href={`/apps/${app.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to {app.name}
          </Link>
        )}

        <h1
          className={`text-4xl font-semibold tracking-tight sm:text-5xl${app ? " mt-8" : ""}`}
        >
          {title}
        </h1>

        {app && (
          <p className="mt-2 text-lg text-muted">
            {app.name} — {app.tagline}
          </p>
        )}

        <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
