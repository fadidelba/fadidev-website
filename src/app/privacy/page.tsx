import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for FadiDev mobile applications.",
};

export default function PrivacyPage() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: April 2, 2026</p>
        </FadeIn>

        <div className="mt-16 space-y-12 text-[15px] leading-[1.8] text-muted">
          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
              <p className="mt-4">
                FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates mobile applications
                for iOS and Android. This Privacy Policy explains how we collect,
                use, and protect your information when you use our apps.
              </p>
              <p className="mt-3">
                By using our apps, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
              <p className="mt-4">
                We are committed to minimal data collection. Our apps may collect
                the following types of information:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Usage Data:</strong> Anonymous analytics data such as app
                  usage patterns, crash reports, and performance metrics. This data
                  does not personally identify you.
                </li>
                <li>
                  <strong className="text-foreground">Device Information:</strong> General device information
                  such as device type, operating system version, and app version
                  for compatibility and troubleshooting purposes.
                </li>
                <li>
                  <strong className="text-foreground">Purchase Information:</strong> Transaction data related
                  to in-app purchases or subscriptions is handled entirely by Apple
                  (App Store) or Google (Play Store). We do not have access to your
                  payment details.
                </li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <p className="mt-4">The information we collect is used solely to:</p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Improve app performance and user experience</li>
                <li>Identify and fix bugs and crashes</li>
                <li>Understand general usage trends to guide future development</li>
              </ul>
              <p className="mt-4">
                We do <strong className="text-foreground">not</strong> sell, trade, or rent your personal
                information to third parties.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
              <p className="mt-4">Our apps may use the following third-party services:</p>
              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Analytics:</strong> We may use analytics services (such
                  as Firebase Analytics or similar tools) to collect anonymous
                  usage data. These services have their own privacy policies.
                </li>
                <li>
                  <strong className="text-foreground">App Store / Google Play:</strong> Purchases and
                  subscriptions are processed through the respective platform.
                  Please refer to{" "}
                  <a href="https://www.apple.com/legal/privacy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    Apple&apos;s Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    Google&apos;s Privacy Policy
                  </a>{" "}
                  for details on how they handle your data.
                </li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Advertising</h2>
              <p className="mt-4">
                Some of our apps may display advertisements provided by
                third-party ad networks. These networks may use anonymous
                identifiers to serve relevant ads. You can opt out of personalized
                advertising through your device settings (iOS: Settings &rarr;
                Privacy &rarr; Tracking; Android: Settings &rarr; Google &rarr;
                Ads).
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
              <p className="mt-4">
                We take reasonable measures to protect the information collected
                through our apps. However, no method of electronic transmission or
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Children&apos;s Privacy (COPPA)</h2>
              <p className="mt-4">
                Our apps are not directed at children under the age of 13. We do
                not knowingly collect personal information from children under 13.
                If we become aware that a child under 13 has provided us with
                personal information, we will take steps to delete that information
                immediately. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us at{" "}
                <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
                  support@fadidev.app
                </a>.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Retention and Deletion</h2>
              <p className="mt-4">
                We retain anonymous analytics data only for as long as necessary to
                fulfill the purposes described in this policy. If you would like to
                request the deletion of any data associated with your use of our
                apps, please contact us at{" "}
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
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:{" "}
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
