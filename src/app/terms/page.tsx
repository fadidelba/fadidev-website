import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FadiDev mobile applications.",
};

export default function TermsPage() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: April 2, 2026</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="mt-4">
                By downloading, installing, or using any mobile application
                (&quot;App&quot;) developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you
                agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do
                not agree to these Terms, please do not use our Apps.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Use of Our Apps</h2>
              <p className="mt-4">
                You may use our Apps for personal, non-commercial purposes in
                accordance with these Terms and all applicable laws and
                regulations. You agree not to:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Reverse engineer, decompile, or disassemble any part of our Apps</li>
                <li>Use our Apps for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of our Apps or related systems</li>
                <li>Modify, adapt, or create derivative works based on our Apps</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Subscriptions and In-App Purchases</h2>
              <p className="mt-4">
                Some of our Apps offer subscriptions or in-app purchases. By
                purchasing a subscription, you agree to the following:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Auto-Renewal:</strong> Subscriptions automatically renew
                  at the end of each billing period unless you cancel at least 24
                  hours before the renewal date.
                </li>
                <li>
                  <strong className="text-foreground">Billing:</strong> Payment is charged to your Apple ID or
                  Google Play account at confirmation of purchase. Your account
                  will be charged for renewal within 24 hours prior to the end of
                  the current period.
                </li>
                <li>
                  <strong className="text-foreground">Cancellation:</strong> You can manage and cancel your
                  subscriptions through your device settings. On iOS, go to
                  Settings &rarr; Apple ID &rarr; Subscriptions. On Android, go to
                  Google Play Store &rarr; Subscriptions.
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
                All purchases and subscriptions are processed through the Apple App
                Store or Google Play Store. Refund requests must be submitted
                directly to the respective platform:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Apple:</strong> Visit{" "}
                  <a href="https://reportaproblem.apple.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    reportaproblem.apple.com
                  </a>{" "}
                  to request a refund for App Store purchases.
                </li>
                <li>
                  <strong className="text-foreground">Google:</strong> Visit the Google Play Store app, go to
                  your order history, and select the purchase you want to refund.
                </li>
              </ul>
              <p className="mt-4">
                We do not process payments directly and therefore cannot issue
                refunds. All refund decisions are at the sole discretion of Apple
                or Google.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-4">
                All content, features, and functionality of our Apps — including
                but not limited to text, graphics, logos, icons, images, audio,
                and software — are the exclusive property of FadiDev and are
                protected by international copyright, trademark, and other
                intellectual property laws.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Disclaimer of Warranties</h2>
              <p className="mt-4">
                Our Apps are provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, either express or implied. We do not
                warrant that our Apps will be uninterrupted, error-free, or free
                of harmful components.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-4">
                To the fullest extent permitted by applicable law, FadiDev shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss of
                data, use, or goodwill arising out of your use of our Apps.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to These Terms</h2>
              <p className="mt-4">
                We reserve the right to modify these Terms at any time. Any
                changes will be posted on this page with an updated revision date.
                Your continued use of our Apps after changes are posted
                constitutes your acceptance of the modified Terms.
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
