import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FadiDev mobile applications.",
};

export default function TermsPage() {
  return (
    <div className="px-6 py-16">
      <article className="prose mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-0 [&_p]:mt-3">
          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using any mobile application
              (&quot;App&quot;) developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you
              agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do
              not agree to these Terms, please do not use our Apps.
            </p>
          </section>

          <section>
            <h2>Use of Our Apps</h2>
            <p>
              You may use our Apps for personal, non-commercial purposes in
              accordance with these Terms and all applicable laws and
              regulations. You agree not to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Reverse engineer, decompile, or disassemble any part of our Apps</li>
              <li>Use our Apps for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of our Apps or related systems</li>
              <li>Modify, adapt, or create derivative works based on our Apps</li>
            </ul>
          </section>

          <section>
            <h2>Subscriptions and In-App Purchases</h2>
            <p>
              Some of our Apps offer subscriptions or in-app purchases. By
              purchasing a subscription, you agree to the following:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Auto-Renewal:</strong> Subscriptions automatically renew
                at the end of each billing period unless you cancel at least 24
                hours before the renewal date.
              </li>
              <li>
                <strong>Billing:</strong> Payment is charged to your Apple ID or
                Google Play account at confirmation of purchase. Your account
                will be charged for renewal within 24 hours prior to the end of
                the current period.
              </li>
              <li>
                <strong>Cancellation:</strong> You can manage and cancel your
                subscriptions through your device settings. On iOS, go to
                Settings &rarr; Apple ID &rarr; Subscriptions. On Android, go to
                Google Play Store &rarr; Subscriptions.
              </li>
              <li>
                <strong>Free Trials:</strong> If a free trial is offered, any
                unused portion of the trial will be forfeited when you purchase a
                subscription.
              </li>
            </ul>
          </section>

          <section>
            <h2>Refund Policy</h2>
            <p>
              All purchases and subscriptions are processed through the Apple App
              Store or Google Play Store. Refund requests must be submitted
              directly to the respective platform:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Apple:</strong> Visit{" "}
                <a
                  href="https://reportaproblem.apple.com"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  reportaproblem.apple.com
                </a>{" "}
                to request a refund for App Store purchases.
              </li>
              <li>
                <strong>Google:</strong> Visit the Google Play Store app, go to
                your order history, and select the purchase you want to refund.
              </li>
            </ul>
            <p>
              We do not process payments directly and therefore cannot issue
              refunds. All refund decisions are at the sole discretion of Apple
              or Google.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our Apps — including
              but not limited to text, graphics, logos, icons, images, audio,
              and software — are the exclusive property of FadiDev and are
              protected by international copyright, trademark, and other
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              Our Apps are provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, either express or implied. We do not
              warrant that our Apps will be uninterrupted, error-free, or free
              of harmful components.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, FadiDev shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenues, whether incurred directly or indirectly, or any loss of
              data, use, or goodwill arising out of your use of our Apps.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any
              changes will be posted on this page with an updated revision date.
              Your continued use of our Apps after changes are posted
              constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              applicable law, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
                support@fadidev.app
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
