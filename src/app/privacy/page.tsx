import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for FadiDev mobile applications.",
};

export default function PrivacyPage() {
  return (
    <div className="px-6 py-16">
      <article className="prose mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-0 [&_p]:mt-3">
          <section>
            <h2>Introduction</h2>
            <p>
              FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates mobile applications
              for iOS and Android. This Privacy Policy explains how we collect,
              use, and protect your information when you use our apps.
            </p>
            <p>
              By using our apps, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>
              We are committed to minimal data collection. Our apps may collect
              the following types of information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Usage Data:</strong> Anonymous analytics data such as app
                usage patterns, crash reports, and performance metrics. This data
                does not personally identify you.
              </li>
              <li>
                <strong>Device Information:</strong> General device information
                such as device type, operating system version, and app version
                for compatibility and troubleshooting purposes.
              </li>
              <li>
                <strong>Purchase Information:</strong> Transaction data related
                to in-app purchases or subscriptions is handled entirely by Apple
                (App Store) or Google (Play Store). We do not have access to your
                payment details.
              </li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>The information we collect is used solely to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Improve app performance and user experience</li>
              <li>Identify and fix bugs and crashes</li>
              <li>Understand general usage trends to guide future development</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>Our apps may use the following third-party services:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Analytics:</strong> We may use analytics services (such
                as Firebase Analytics or similar tools) to collect anonymous
                usage data. These services have their own privacy policies.
              </li>
              <li>
                <strong>App Store / Google Play:</strong> Purchases and
                subscriptions are processed through the respective platform.
                Please refer to{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple&apos;s Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>{" "}
                for details on how they handle your data.
              </li>
            </ul>
          </section>

          <section>
            <h2>Advertising</h2>
            <p>
              Some of our apps may display advertisements provided by
              third-party ad networks. These networks may use anonymous
              identifiers to serve relevant ads. You can opt out of personalized
              advertising through your device settings (iOS: Settings &rarr;
              Privacy &rarr; Tracking; Android: Settings &rarr; Google &rarr;
              Ads).
            </p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect the information collected
              through our apps. However, no method of electronic transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy (COPPA)</h2>
            <p>
              Our apps are not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we become aware that a child under 13 has provided us with
              personal information, we will take steps to delete that information
              immediately. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us at{" "}
              <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
                support@fadidev.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Data Retention and Deletion</h2>
            <p>
              We retain anonymous analytics data only for as long as necessary to
              fulfill the purposes described in this policy. If you would like to
              request the deletion of any data associated with your use of our
              apps, please contact us at{" "}
              <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
                support@fadidev.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:{" "}
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
