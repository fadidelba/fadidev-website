import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Qrisp",
  description: "Terms of Service for Qrisp — Premium QR & Barcode Scanner.",
};

export default function QrispTermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-lg text-muted">Qrisp — QR & Barcode Scanner</p>
          <p className="mt-4 text-sm text-muted">Last updated: April 10, 2026</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="mt-4">
                By downloading, installing, or using Qrisp (&quot;the App&quot;),
                developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, please do
                not use the App.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Description of Service</h2>
              <p className="mt-4">
                Qrisp is a QR code and barcode scanner application that allows you
                to scan, create, and manage QR codes and barcodes. The App includes
                both free and premium features available through optional in-app
                subscriptions.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Use of the App</h2>
              <p className="mt-4">
                You may use Qrisp for personal, non-commercial purposes in
                accordance with these Terms and all applicable laws. You agree not
                to:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Reverse engineer, decompile, or disassemble any part of the App</li>
                <li>Use the App for any unlawful purpose or to scan codes that facilitate illegal activity</li>
                <li>Attempt to gain unauthorized access to any part of the App or related systems</li>
                <li>Modify, adapt, or create derivative works based on the App</li>
                <li>Use the App to infringe on the intellectual property rights of others</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Free and Premium Features</h2>
              <p className="mt-4">
                Qrisp offers core scanning functionality for free. Certain advanced
                features — such as batch scanning, custom QR code colors, and
                search within scan history — require a premium subscription.
              </p>
              <p className="mt-3">
                Free users may generate a limited number of QR codes per day. This
                limit resets daily.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Subscriptions and In-App Purchases</h2>
              <p className="mt-4">
                By purchasing a subscription, you agree to the following:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Auto-Renewal:</strong> Subscriptions automatically renew
                  at the end of each billing period unless you cancel at least 24
                  hours before the renewal date.
                </li>
                <li>
                  <strong className="text-foreground">Billing:</strong> Payment is charged to your Apple ID or
                  Google Play account at confirmation of purchase. Your account will
                  be charged for renewal within 24 hours prior to the end of the
                  current period.
                </li>
                <li>
                  <strong className="text-foreground">Cancellation:</strong> You can manage and cancel your
                  subscriptions through your device settings. On iOS, go to Settings
                  &rarr; Apple ID &rarr; Subscriptions. On Android, go to Google
                  Play Store &rarr; Subscriptions.
                </li>
                <li>
                  <strong className="text-foreground">Free Trials:</strong> If a free trial is offered, any
                  unused portion of the trial will be forfeited when you purchase a
                  subscription.
                </li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Refund Policy</h2>
              <p className="mt-4">
                All purchases are processed through the Apple App Store or Google
                Play Store. Refund requests must be submitted directly to the
                respective platform:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Apple:</strong> Visit{" "}
                  <a href="https://reportaproblem.apple.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    reportaproblem.apple.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Google:</strong> Open the Google Play Store app, go to your
                  order history, and select the purchase you want to refund.
                </li>
              </ul>
              <p className="mt-4">
                We do not process payments directly and therefore cannot issue
                refunds. All refund decisions are at the sole discretion of Apple or
                Google.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
              <p className="mt-4">
                Qrisp uses third-party services for specific functionality:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">RevenueCat:</strong> For subscription and purchase management.
                </li>
                <li>
                  <strong className="text-foreground">Product Lookup APIs:</strong> Open Food Facts, Google Books
                  API, Open Library, and others for barcode/ISBN lookups. These
                  services are provided as-is, and we are not responsible for the
                  accuracy of their data.
                </li>
              </ul>
              <p className="mt-4">
                These services have their own terms of service and privacy policies.
                Your use of these services through Qrisp is subject to their
                respective terms.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Scanned Content</h2>
              <p className="mt-4">
                Qrisp scans and decodes QR codes and barcodes created by third
                parties. We are not responsible for the content, accuracy, or safety
                of any information encoded in scanned codes. Exercise caution when
                opening URLs or following instructions from scanned codes,
                especially from unknown sources.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-4">
                All content, features, and functionality of Qrisp — including but
                not limited to text, graphics, logos, icons, images, and software —
                are the exclusive property of FadiDev and are protected by
                international copyright, trademark, and other intellectual property
                laws.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Disclaimer of Warranties</h2>
              <p className="mt-4">
                Qrisp is provided &quot;as is&quot; and &quot;as available&quot;
                without warranties of any kind, either express or implied. We do not
                warrant that the App will be uninterrupted, error-free, or free of
                harmful components. We do not guarantee the accuracy of barcode or
                QR code scanning results.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-4">
                To the fullest extent permitted by applicable law, FadiDev shall not
                be liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use, or
                goodwill arising out of your use of Qrisp.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to These Terms</h2>
              <p className="mt-4">
                We reserve the right to modify these Terms at any time. Any changes
                will be posted on this page with an updated revision date. Your
                continued use of the App after changes are posted constitutes your
                acceptance of the modified Terms.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Governing Law</h2>
              <p className="mt-4">
                These Terms shall be governed by and construed in accordance with
                applicable law, without regard to conflict of law principles.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="mt-4">
                If you have any questions about these Terms, please contact us at:{" "}
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
