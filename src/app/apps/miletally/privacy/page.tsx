import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MileTally",
  description: "Privacy Policy for MileTally — Track miles, cut your taxes.",
};

export default function MiletallyPrivacyPage() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Link
            href="/apps/miletally"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to MileTally
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-muted">MileTally — Track miles, cut your taxes</p>
          <p className="mt-4 text-sm text-muted">Last updated: 2026-07-23</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p className="mt-4">
                FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops and operates
                MileTally, a local-first iOS mileage-and-expense logbook for US self-employed and gig workers that turns every tap-to-log trip and imported earnings file into a live after-mileage net figure and an accountant-ready Schedule C summary. This Privacy Policy explains how
                we handle your information when you use MileTally.
              </p>
              <p className="mt-3">
                By using MileTally, you agree to the practices described in this
                policy.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Privacy-First Design</h2>
              <p className="mt-4">
                MileTally is designed with your privacy in mind. The app operates
                primarily on your device, and we do not collect, store, or transmit
                your personal data to our servers. There are no user accounts, no
                analytics tracking, and no advertising in MileTally.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Stored on Your Device</h2>
              <p className="mt-4">
                All data generated while using MileTally is stored locally on your
                device and is never transmitted to us. This includes:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Entries, logs and history you create in the app</li>
                <li>Your app settings and preferences</li>
                <li>Your purchase/entitlement status (kept on-device via Apple StoreKit)</li>
              </ul>
            </section>
          </FadeIn>

          

          

          

          

          

          

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Location</h2>
              <p className="mt-4">
                MileTally uses your location <strong className="text-foreground">only while
                the app is open and only while you are recording a trip</strong> — you start
                every recording yourself by tapping START. The app requests
                &quot;When In Use&quot; access. It never uses background or always-on
                location, and it does not track you between trips.
              </p>
              <p className="mt-3">
                Location readings serve exactly one purpose: computing the distance of
                the trip you are recording. That distance is saved with the trip. The
                underlying coordinates are not stored, not exported, and never leave your
                device — nothing is sent to us or to any third party.
              </p>
              <p className="mt-3">
                If you deny location access, MileTally stays fully usable: enter your
                odometer readings or the distance by hand instead.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Subscriptions and Purchases</h2>
              <p className="mt-4">
                MileTally Pro is available as a monthly or annual auto-renewable
                subscription, or as a one-time Lifetime purchase. All three are handled
                entirely by Apple&apos;s native StoreKit. Entitlement status is determined
                on-device by querying StoreKit; we use no third-party subscription SDKs.
                Payment details are handled entirely by Apple (App Store) — we never have
                access to your payment information.
              </p>
            </section>
          </FadeIn>



          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">What We Do Not Collect</h2>
              <p className="mt-4">MileTally does not collect or use:</p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Analytics or usage tracking data</li>
                <li>Crash reports or performance metrics</li>
                <li>Advertising identifiers (IDFA/GAID)</li>
                <li>Device identifiers sent to any server</li>
                <li>Location data sent to any server — your coordinates never leave your device (see &quot;Location&quot; above)</li>
                <li>Contact information</li>
                <li>Biometric data</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
              <p className="mt-4">
                Since your data stays on your device, it is protected by your
                device&apos;s built-in security features including encryption and
                access controls. We recommend keeping your device software up to date
                and using a passcode or biometric lock.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Deletion</h2>
              <p className="mt-4">You can delete your data at any time:</p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Delete individual entries directly in the app</li>
                <li>Delete the app to remove all locally stored data permanently</li>
              </ul>
              <p className="mt-4">
                Since we do not store your data on any server, deletion from your device
                is complete and permanent.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Children&apos;s Privacy</h2>
              <p className="mt-4">
                MileTally does not knowingly collect personal information from
                children under the age of 13. Since the app does not collect personal
                data from any user, it is safe for use by all ages. If you are a parent
                or guardian and have concerns, please contact us at support@fadidev.app.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. Any changes will
                be posted on this page with an updated revision date. We encourage you
                to review this policy periodically.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-4">
                If you have any questions about this Privacy Policy, please contact us
                at: <a href="mailto:support@fadidev.app" className="text-foreground underline hover:no-underline">support@fadidev.app</a>
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
