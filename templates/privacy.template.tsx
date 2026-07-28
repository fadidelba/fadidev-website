// Privacy page TSX template — consumed by exopilot / PipelineKit's /metadata agent.
// Not compiled by Next.js (this `templates/` directory is excluded in tsconfig).
//
// The page chrome (wrapper, back-link, heading, subtitle) lives in
// src/components/LegalPage.tsx, NOT here. Generated pages must never restate it —
// that is exactly how the older pages drifted apart. Emit only <Section> blocks.
//
// The back-link and the "{{APP_NAME}} — tagline" subtitle are derived from the
// app's entry in src/data/apps.ts via the `app` prop, so add that entry first.
//
// Placeholders use {{NAME}} syntax. Conditional sections use
// {{IF feature}} ... {{/IF}} markers — the substituting agent removes the whole
// block (including markers AND the blank lines it leaves behind) when `feature`
// is not declared in the privacy manifest.
// Available IF flags: camera, photos, notifications, healthkit,
// third_party_apis, revenuecat, native_storekit, icloud_sync

import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — {{APP_NAME}}",
  description: "Privacy Policy for {{APP_NAME}} — {{APP_TAGLINE}}.",
};

export default function {{APP_CLASS}}PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="{{APP_SLUG}}" lastUpdated="{{LAST_UPDATED}}">
      <Section title="Introduction">
        <p className="mt-4">
          FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops and operates
          {{APP_NAME}}, {{APP_DESCRIPTION}}. This Privacy Policy explains how
          we handle your information when you use {{APP_NAME}}.
        </p>
        <p className="mt-3">
          By using {{APP_NAME}}, you agree to the practices described in this
          policy.
        </p>
      </Section>

      <Section title="Privacy-First Design">
        <p className="mt-4">
          {{APP_NAME}} is designed with your privacy in mind. The app operates
          primarily on your device, and we do not collect, store, or transmit
          your personal data to our servers. There are no user accounts, no
          analytics tracking, and no advertising in {{APP_NAME}}.
        </p>
      </Section>

      <Section title="Data Stored on Your Device">
        <p className="mt-4">
          All data generated while using {{APP_NAME}} is stored locally on your
          device and is never transmitted to us. This includes:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {{LOCAL_DATA_LIST_JSX}}
        </ul>
      </Section>

      {{IF camera}}
      <Section title="Camera Access">
        <p className="mt-4">
          {{APP_NAME}} requires access to your device&apos;s camera to {{CAMERA_PURPOSE}}.
          Camera data is processed in real-time on your device and is never
          recorded, stored, or transmitted to any server.
        </p>
      </Section>
      {{/IF}}

      {{IF photos}}
      <Section title="Photo Library Access">
        <p className="mt-4">
          {{APP_NAME}} may request access to your photo library for {{PHOTOS_PURPOSE}}.
          We do not access, upload, or analyze any other photos in your library
          beyond what you explicitly share with the app.
        </p>
      </Section>
      {{/IF}}

      {{IF notifications}}
      <Section title="Notifications">
        <p className="mt-4">
          {{APP_NAME}} sends local notifications scheduled on your device (such
          as reminders) when you opt in. No notification content is sent to any
          server — every reminder is generated and delivered locally by iOS. You
          can disable notifications anytime in iOS Settings.
        </p>
      </Section>
      {{/IF}}

      {{IF healthkit}}
      <Section title="Apple Health Integration">
        <p className="mt-4">
          {{APP_NAME}} integrates with Apple Health to {{HEALTHKIT_PURPOSE}}.
          All Health data accessed by {{APP_NAME}} stays on your device — we
          never read, copy, or transmit your Health data to any server. You can
          revoke Health access anytime in iOS Settings → Privacy &amp; Security →
          Health → {{APP_NAME}}.
        </p>
      </Section>
      {{/IF}}

      {{IF third_party_apis}}
      <Section title="Third-Party Lookups">
        <p className="mt-4">
          When you {{THIRD_PARTY_TRIGGER}}, {{APP_NAME}} can optionally look up
          information using the following public APIs:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {{THIRD_PARTY_LIST_JSX}}
        </ul>
        <p className="mt-4">
          These lookups send only the minimum query necessary and your language
          preference to the respective service. No personal information or device
          identifiers are shared. These services have their own privacy policies.
        </p>
      </Section>
      {{/IF}}

      {{IF revenuecat}}
      <Section title="Subscriptions and Purchases">
        <p className="mt-4">
          {{APP_NAME}} offers optional premium features via in-app subscriptions.
          Subscriptions are managed through RevenueCat, a third-party subscription
          management service. RevenueCat processes your subscription status and
          purchase information to manage entitlements. Payment details are handled
          entirely by Apple (App Store) — we never have access to your payment
          information.
        </p>
      </Section>
      {{/IF}}

      {{IF native_storekit}}
      <Section title="Subscriptions and Purchases">
        <p className="mt-4">
          {{APP_NAME}} offers optional premium features via in-app subscriptions,
          handled entirely by Apple&apos;s native StoreKit. Subscription status is
          determined on-device by querying StoreKit; we use no third-party
          subscription SDKs. Payment details are handled entirely by Apple
          (App Store) — we never have access to your payment information.
        </p>
      </Section>
      {{/IF}}

      {{IF icloud_sync}}
      <Section title="iCloud Sync">
        <p className="mt-4">
          If you enable iCloud Sync, {{APP_NAME}} stores your data in your private
          iCloud container. This data is end-to-end encrypted by Apple and
          accessible only to you across your devices signed in to the same Apple ID.
          We never have access to your iCloud-synced data.
        </p>
      </Section>
      {{/IF}}

      <Section title="What We Do Not Collect">
        <p className="mt-4">{{APP_NAME}} does not collect or use:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Analytics or usage tracking data</li>
          <li>Crash reports or performance metrics</li>
          <li>Advertising identifiers (IDFA)</li>
          <li>Device identifiers sent to any server</li>
          <li>Location data (unless explicitly listed above)</li>
          <li>Contact information</li>
          <li>Biometric data</li>
        </ul>
      </Section>

      <Section title="Data Security">
        <p className="mt-4">
          Since your data stays on your device, it is protected by your
          device&apos;s built-in security features including encryption and
          access controls. We recommend keeping your device software up to date
          and using a passcode or biometric lock.
        </p>
      </Section>

      <Section title="Data Deletion">
        <p className="mt-4">You can delete your data at any time:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {{DELETION_INSTRUCTIONS_JSX}}
        </ul>
        <p className="mt-4">
          Since we do not store your data on any server, deletion from your device
          is complete and permanent.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p className="mt-4">
          {{APP_NAME}} does not knowingly collect personal information from
          children under the age of 13. Since the app does not collect personal
          data from any user, it is safe for use by all ages. If you are a parent
          or guardian and have concerns, please contact us at support@fadidev.app.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p className="mt-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date. We encourage you
          to review this policy periodically.
        </p>
      </Section>

      <Section title="Contact Us">
        <p className="mt-4">
          If you have any questions about this Privacy Policy, please contact us
          at: <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">support@fadidev.app</a>
        </p>
      </Section>
    </LegalPage>
  );
}
