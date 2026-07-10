import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — QuietNights",
  description: "Privacy Policy for QuietNights — Nursery noise & sleep monitor.",
};

export default function QuietnightsPrivacyPage() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Link
            href="/apps/quietnights"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to QuietNights
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-muted">QuietNights — Nursery noise &amp; sleep monitor</p>
          <p className="mt-4 text-sm text-muted">Last updated: 2026-07-10</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">The short version</h2>
              <p className="mt-4">
                <strong className="text-foreground">QuietNights collects nothing.</strong> It runs
                entirely on your device. We have no servers, no analytics, no accounts, and no
                third-party SDKs. No audio is ever recorded.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Microphone</h2>
              <p className="mt-4">
                QuietNights uses the microphone only to measure ambient sound levels (decibels) in
                real time during a session you explicitly start and end.{" "}
                <strong className="text-foreground">
                  No audio is ever recorded, saved, or transmitted.
                </strong>{" "}
                Only numeric decibel values are stored, on your device.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Your data stays on your device</h2>
              <p className="mt-4">
                Sessions, settings, and calibration are stored locally on your iPhone. If you buy
                QuietNights Pro and enable iCloud sync, that data is stored in{" "}
                <em>your own</em> private iCloud account (provided by Apple) so it can sync across
                your devices. It is never sent to us and we cannot see it. iCloud sync is optional
                and off by default.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Purchases</h2>
              <p className="mt-4">
                The one-time Pro purchase is processed by Apple through the App Store. We never
                receive your name, payment card, or billing details.
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
                QuietNights is a tool for parents. Because it collects no data at all, it collects
                no data from or about children.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-4">
                Questions about this policy? Email{" "}
                <a href="mailto:faddyout@gmail.com" className="text-foreground underline underline-offset-4">
                  faddyout@gmail.com
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
