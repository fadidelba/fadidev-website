import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Knight Grid",
  description: "Privacy Policy for Knight Grid — Solve the Knight's Tour.",
};

export default function KnightgridPrivacyPage() {
  return (
    <div className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Link
            href="/apps/knightgrid"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Knight Grid
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-muted">Knight Grid — Solve the Knight&apos;s Tour</p>
          <p className="mt-4 text-sm text-muted">Last updated: 2026-07-12</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">The short version</h2>
              <p className="mt-4">
                <strong className="text-foreground">Knight Grid collects nothing.</strong> It is a
                single-player puzzle game that runs entirely on your device. We have no servers, no
                analytics, no accounts, and no third-party SDKs. The app never connects to the
                internet.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Your data stays on your device</h2>
              <p className="mt-4">
                Your solve history, best times, and settings (theme, piece style, haptics) are
                stored locally on your iPhone or iPad. They are never transmitted anywhere and we
                cannot see them. Deleting the app deletes this data.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Purchases</h2>
              <p className="mt-4">
                Knight Grid is a one-time purchase processed by Apple through the App Store. We
                never receive your name, payment card, or billing details.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">No tracking</h2>
              <p className="mt-4">
                No third-party SDKs, no advertising identifiers, no tracking, no cookies, no
                analytics of any kind.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Children</h2>
              <p className="mt-4">
                Knight Grid is rated 4+. Because it collects no data at all, it collects no data
                from or about children.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-4">
                Questions about this policy? Email{" "}
                <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
                  support@fadidev.app
                </a>
                .
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
