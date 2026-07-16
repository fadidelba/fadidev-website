"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "@/data/apps";

export default function Footer() {
  const pathname = usePathname();

  // On app pages, Privacy/Terms point at that app's own documents.
  const appSlug = pathname.startsWith("/apps/")
    ? pathname.split("/")[2]
    : null;
  const app = appSlug ? apps.find((a) => a.slug === appSlug) : null;

  const privacyHref = app ? `/apps/${app.slug}/privacy` : "/privacy";
  // Knight Grid has no per-app terms (paid app, standard Apple EULA)
  const APPS_WITH_TERMS = new Set(["qrisp", "quietnights", "miletally"]);
  const termsHref =
    app && APPS_WITH_TERMS.has(app.slug) ? `/apps/${app.slug}/terms` : "/terms";

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-display text-base font-bold tracking-tight">FadiDev</div>
            <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-muted">
              A one-person app studio in Germany. Small, careful apps for iOS.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href={privacyHref} className="text-muted transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href={termsHref} className="text-muted transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/support" className="text-muted transition-colors hover:text-foreground">
              Support
            </Link>
            <a
              href="mailto:support@fadidev.app"
              className="text-muted transition-colors hover:text-foreground"
            >
              support@fadidev.app
            </a>
          </nav>
        </div>
        <div className="spec-label mt-14 text-faint">
          © {new Date().getFullYear()} FadiDev · Made in Germany
        </div>
      </div>
    </footer>
  );
}
