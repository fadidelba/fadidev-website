import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section } from "@/components/LegalPage";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for FadiDev iOS applications.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="2026-07-29">
      <Section title="Introduction">
        <p className="mt-4">
          FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops applications
          for iOS. This Privacy Policy explains what happens to your
          information when you use them. The short version: our apps run on
          your device, and we do not receive your data.
        </p>
        <p className="mt-3">
          Each app also has its own policy covering what it stores on your
          device and which permissions it asks for. Where an app&apos;s policy is
          more specific than this one, the app&apos;s policy applies.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p className="mt-4">
          None. We do not operate servers, accounts, or backends for our apps.
          There is no sign-up, and nothing you enter is transmitted to us.
        </p>
        <p className="mt-4">Specifically, our apps contain:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>No analytics or telemetry SDKs</li>
          <li>No advertising and no advertising identifiers (IDFA)</li>
          <li>No user accounts, logins, or profiles</li>
          <li>No third-party trackers or cookies</li>
        </ul>
        <p className="mt-4">
          Data an app creates — your entries, settings, and content — stays in
          the app&apos;s storage on your device.
        </p>
      </Section>

      <Section title="What Apple Receives">
        <p className="mt-4">
          Our apps are distributed through the App Store, so Apple is involved
          in two ways we do not control:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong className="text-foreground">Purchases:</strong> Any purchase or
            subscription is processed entirely by Apple. We never see your
            payment details — only anonymous sales totals in App Store Connect.
          </li>
          <li>
            <strong className="text-foreground">Diagnostics:</strong> If you have
            turned on <em>Share With App Developers</em> in iOS (Settings &rarr;
            Privacy &amp; Security &rarr; Analytics &amp; Improvements), Apple may
            share aggregated crash and usage statistics with us. These reports
            are aggregated by Apple and do not identify you. You can turn this
            off at any time in the same place.
          </li>
        </ul>
        <p className="mt-4">
          See{" "}
          <a href="https://www.apple.com/legal/privacy/" className="text-foreground underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Apple&apos;s Privacy Policy
          </a>{" "}
          for how Apple handles that data.
        </p>
      </Section>

      <Section title="Data Security">
        <p className="mt-4">
          Because we hold no data, there is no database of ours to breach. What
          lives on your device is protected by iOS and by your device passcode.
          If you use iCloud Backup, your device backup — including app data —
          is stored and encrypted under Apple&apos;s terms.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p className="mt-4">
          Some of our apps are made for families and are appropriate for young
          children. Because our apps collect no personal information from
          anyone, they collect none from children either — there is no account
          to create, no profile to fill in, and nothing transmitted off the
          device. We therefore do not knowingly hold personal information about
          a child. If you are a parent or guardian with a question about a
          specific app, contact us at{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>.
        </p>
      </Section>

      <Section title="Data Retention and Deletion">
        <p className="mt-4">
          We retain nothing, so there is nothing for us to delete. Deleting an
          app removes its data from your device. If the app supported iCloud
          sync, also remove it from your iCloud storage in Settings.
        </p>
      </Section>

      <Section title="Per-App Policies">
        <p className="mt-4">
          Each app documents its own storage and permissions:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {apps.map((app) => (
            <li key={app.slug}>
              <Link
                href={`/apps/${app.slug}/privacy`}
                className="text-foreground underline underline-offset-4"
              >
                {app.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Changes to This Policy">
        <p className="mt-4">
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with an updated revision date. We
          encourage you to review this policy periodically.
        </p>
      </Section>

      <Section title="Contact Us">
        <p className="mt-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
