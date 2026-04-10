import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Qrisp",
  description: "Privacy Policy for Qrisp — Premium QR & Barcode Scanner.",
};

export default function QrispPrivacyPage() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Link
            href="/apps/qrisp"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Qrisp
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-muted">Qrisp — QR & Barcode Scanner</p>
          <p className="mt-4 text-sm text-muted">Last updated: April 10, 2026</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p className="mt-4">
                FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops and operates
                Qrisp, a QR code and barcode scanner app for iOS and Android. This
                Privacy Policy explains how we handle your information when you use
                Qrisp.
              </p>
              <p className="mt-3">
                By using Qrisp, you agree to the practices described in this policy.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Privacy-First Design</h2>
              <p className="mt-4">
                Qrisp is designed with your privacy in mind. The app operates
                primarily on your device, and we do not collect, store, or transmit
                your personal data to our servers. There are no user accounts, no
                analytics tracking, and no advertising in Qrisp.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Stored on Your Device</h2>
              <p className="mt-4">
                All data generated while using Qrisp is stored locally on your
                device and is never transmitted to us. This includes:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Scan History:</strong> The QR codes and barcodes you scan,
                  including their content, type, and timestamps. You can delete your
                  scan history at any time from within the app.
                </li>
                <li>
                  <strong className="text-foreground">Favorites and Tags:</strong> Any scans you mark as favorites
                  or organize with tags are stored only on your device.
                </li>
                <li>
                  <strong className="text-foreground">Generated QR Codes:</strong> QR codes you create are
                  processed and stored locally.
                </li>
                <li>
                  <strong className="text-foreground">App Preferences:</strong> Your settings such as theme mode,
                  language, sound, and vibration preferences are stored locally on
                  your device.
                </li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Camera Access</h2>
              <p className="mt-4">
                Qrisp requires access to your device&apos;s camera to scan QR codes
                and barcodes. Camera data is processed in real-time on your device
                and is never recorded, stored, or transmitted to any server.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Photo Library Access</h2>
              <p className="mt-4">
                Qrisp may request access to your photo library for two purposes:
                scanning QR codes from saved images and saving generated QR codes.
                We do not access, upload, or analyze any other photos in your
                library.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Product and Book Lookups</h2>
              <p className="mt-4">
                When you scan a product barcode or ISBN, Qrisp can optionally look
                up product or book information using the following public APIs:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Open Food Facts, Open Beauty Facts, Open Products Facts</li>
                <li>Google Books API</li>
                <li>Open Library API</li>
                <li>UPCitemdb</li>
              </ul>
              <p className="mt-4">
                These lookups send only the scanned barcode or ISBN number and your
                language preference to the respective service. No personal
                information or device identifiers are shared. These services have
                their own privacy policies, and we encourage you to review them.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Subscriptions and Purchases</h2>
              <p className="mt-4">
                Qrisp offers optional premium features via in-app subscriptions.
                Subscriptions are managed through{" "}
                <a href="https://www.revenuecat.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  RevenueCat
                </a>
                , a third-party subscription management service. RevenueCat
                processes your subscription status and purchase information to manage
                entitlements. Payment details are handled entirely by Apple (App
                Store) or Google (Play Store) — we never have access to your payment
                information.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">What We Do Not Collect</h2>
              <p className="mt-4">Qrisp does not collect or use:</p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Analytics or usage tracking data</li>
                <li>Crash reports or performance metrics</li>
                <li>Advertising identifiers (IDFA/GAID)</li>
                <li>Device identifiers sent to any server</li>
                <li>Location data</li>
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
                access controls. We recommend keeping your device software up to
                date and using a passcode or biometric lock.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Deletion</h2>
              <p className="mt-4">
                You can delete your scan history, favorites, and all app data at any
                time by clearing data within the app or by uninstalling Qrisp from
                your device. Since we do not store your data on any server, deletion
                from your device is complete and permanent.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Children&apos;s Privacy</h2>
              <p className="mt-4">
                Qrisp does not knowingly collect personal information from children
                under the age of 13. Since the app does not collect personal data
                from any user, it is safe for use by all ages. If you are a parent
                or guardian and have concerns, please contact us at{" "}
                <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
                  support@fadidev.app
                </a>.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-4">
                If you have any questions about this Privacy Policy, please contact
                us at:{" "}
                <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
                  support@fadidev.app
                </a>
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
