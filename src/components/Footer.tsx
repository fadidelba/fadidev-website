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
  const termsHref = app?.hasTerms ? `/apps/${app.slug}/terms` : "/terms";

  return (
    <footer className="crosshair border-t border-border">
      <div className="px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-mono text-sm font-semibold tracking-[0.08em]">
              FADIDEV
            </div>
            <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-muted">
              The one-person app workshop of Fadi. Small, careful apps for iOS,
              made in Germany.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-[13px]">
            <Link href={privacyHref} className="text-muted transition-colors hover:text-term">
              privacy
            </Link>
            <Link href={termsHref} className="text-muted transition-colors hover:text-term">
              terms
            </Link>
            <Link href="/support" className="text-muted transition-colors hover:text-term">
              support
            </Link>
            <a
              href="mailto:support@fadidev.app"
              className="text-muted transition-colors hover:text-term"
            >
              support@fadidev.app
            </a>
          </nav>
        </div>
        <div className="spec-label mt-14 text-faint">
          {`© ${new Date().getFullYear()} FadiDev · This site sets no cookies, runs no analytics, and has no idea you're here.`}
        </div>
      </div>
    </footer>
  );
}
