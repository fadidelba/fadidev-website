import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — QuietNights",
  description: "Terms of Use for QuietNights — Nursery noise & sleep monitor.",
};

export default function QuietnightsTermsPage() {
  return (
    <div className="px-6 pt-16 pb-24">
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
            Terms of Use
          </h1>
          <p className="mt-2 text-lg text-muted">QuietNights — Nursery noise &amp; sleep monitor</p>
          <p className="mt-4 text-sm text-muted">Last updated: 2026-07-10</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">License</h2>
              <p className="mt-4">
                QuietNights is licensed, not sold, to you for personal use on your Apple devices,
                subject to Apple&apos;s{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  className="text-foreground underline underline-offset-4"
                >
                  Standard EULA
                </a>
                .
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Purchases</h2>
              <p className="mt-4">
                QuietNights Pro is a one-time, non-consumable purchase — no subscription, no free
                trial, no ads. Price and terms are shown before you buy. Purchases are handled by
                Apple; refunds are subject to Apple&apos;s policies.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Not a medical device</h2>
              <p className="mt-4">
                <strong className="text-foreground">
                  QuietNights is a measurement aid for general awareness, not a medical, safety, or
                  hearing-diagnosis device.
                </strong>{" "}
                Decibel readings are estimates from a consumer smartphone microphone, not a
                certified sound level meter, and may differ from professional instruments. The
                pediatric reference levels (e.g. AAP safe-sleep, hearing-safe) are cited guidance to
                help you judge your environment — they are not a clinical assessment. Do not rely on
                QuietNights for medical decisions; consult a qualified professional for any health
                concern.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Use of the App</h2>
              <p className="mt-4">
                You may use QuietNights for personal, non-commercial purposes in accordance with
                these Terms and all applicable laws. You agree not to:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Reverse engineer, decompile, or disassemble any part of the App</li>
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the App or related systems</li>
                <li>Modify, adapt, or create derivative works based on the App</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">No warranty</h2>
              <p className="mt-4">
                The App is provided &quot;as is&quot;, without warranty of any kind. To the extent
                permitted by law, the developer is not liable for any damages arising from its use.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-4">
                Questions about these terms? Email{" "}
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
