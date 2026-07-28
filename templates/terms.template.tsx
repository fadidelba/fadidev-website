// Terms page TSX template — consumed by exopilot / PipelineKit's /metadata agent.
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
// is not declared in the spec.
// Available IF flags: freemium, subscriptions, lifetime, lifetime_only,
// refunds, third_party_services, premium_description
//
// {{APP_DESCRIPTION_LONG}} is spliced into "{{APP_NAME}} is …", so it must be a
// lowercase continuation carrying its own final punctuation — "a local-first iOS
// logbook that …", not "Eine Familien-App …". The template adds no period of its
// own; adding one is what produced a shipped ".." in an earlier generation.

import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — {{APP_NAME}}",
  description: "Terms of Service for {{APP_NAME}} — {{APP_TAGLINE}}.",
};

export default function {{APP_CLASS}}TermsPage() {
  return (
    <LegalPage title="Terms of Service" app="{{APP_SLUG}}" lastUpdated="{{LAST_UPDATED}}">
      <Section title="Acceptance of Terms">
        <p className="mt-4">
          By downloading, installing, or using {{APP_NAME}} (&quot;the App&quot;),
          developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
          you agree to be bound by these Terms of Service (&quot;Terms&quot;). If
          you do not agree to these Terms, please do not use the App.
        </p>
      </Section>

      <Section title="Description of Service">
        <p className="mt-4">
          {{APP_NAME}} is {{APP_DESCRIPTION_LONG}}{{IF premium_description}} {{PREMIUM_DESCRIPTION}}{{/IF}}
        </p>
      </Section>

      <Section title="Use of the App">
        <p className="mt-4">
          You may use {{APP_NAME}} for personal, non-commercial purposes in
          accordance with these Terms and all applicable laws. You agree not to:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Reverse engineer, decompile, or disassemble any part of the App</li>
          <li>Use the App for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to any part of the App or related systems</li>
          <li>Modify, adapt, or create derivative works based on the App</li>
          <li>Use the App to infringe on the intellectual property rights of others</li>
        </ul>
      </Section>

      {{IF freemium}}
      <Section title="Free and Premium Features">
        <p className="mt-4">
          {{APP_NAME}} offers core functionality for free. Certain advanced
          features require a premium subscription:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {{PREMIUM_FEATURES_LIST_JSX}}
        </ul>
      </Section>
      {{/IF}}

      {{IF subscriptions}}
      <Section title="Subscriptions and In-App Purchases">
        <p className="mt-4">
          By purchasing a subscription, you agree to the following:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong className="text-foreground">Auto-Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless you cancel at least 24 hours before the renewal date.
          </li>
          <li>
            <strong className="text-foreground">Billing:</strong> Payment is charged to your Apple ID account at confirmation of purchase. Your account will be charged for renewal within 24 hours prior to the end of the current period.
          </li>
          <li>
            <strong className="text-foreground">Cancellation:</strong> You can manage and cancel your subscriptions through your device settings: Settings → Apple ID → Subscriptions.
          </li>
          <li>
            <strong className="text-foreground">Free Trials:</strong> If a free trial is offered, any unused portion of the trial will be forfeited when you purchase a subscription.
          </li>
        </ul>
        {{IF lifetime}}
        <p className="mt-4">
          {{APP_NAME}} also offers a one-time lifetime purchase option. Lifetime
          purchases are non-renewing — once purchased, you retain access to Pro
          features for the lifetime of the app, with no recurring charges.
        </p>
        {{/IF}}
      </Section>
      {{/IF}}

      {{IF lifetime_only}}
      <Section title="In-App Purchase">
        <p className="mt-4">
          {{APP_NAME}} offers premium features as a single one-time purchase
          (no subscription, no recurring charges). The purchase is processed
          entirely by Apple via the App Store; once completed, premium features
          remain unlocked for the lifetime of the app on devices signed in to
          your Apple ID.
        </p>
        <p className="mt-3">
          Use &quot;Restore Purchases&quot; inside the app to re-activate your
          purchase on a new device. Payment details are handled by Apple — we
          never see or store them.
        </p>
      </Section>
      {{/IF}}

      {{IF refunds}}
      <Section title="Refund Policy">
        <p className="mt-4">
          All purchases are processed through the Apple App Store. Refund requests
          must be submitted directly to Apple at{" "}
          <a href="https://reportaproblem.apple.com" className="text-foreground underline underline-offset-4">reportaproblem.apple.com</a>.
        </p>
        <p className="mt-3">
          We do not process payments directly and therefore cannot issue refunds.
          All refund decisions are at the sole discretion of Apple.
        </p>
      </Section>
      {{/IF}}

      {{IF third_party_services}}
      <Section title="Third-Party Services">
        <p className="mt-4">
          {{APP_NAME}} uses third-party services for specific functionality:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {{THIRD_PARTY_SERVICES_LIST_JSX}}
        </ul>
        <p className="mt-4">
          These services have their own terms of service and privacy policies.
          Your use of these services through {{APP_NAME}} is subject to their
          respective terms.
        </p>
      </Section>
      {{/IF}}

      <Section title="Intellectual Property">
        <p className="mt-4">
          All content, features, and functionality of {{APP_NAME}} — including
          but not limited to text, graphics, logos, icons, images, and software —
          are the exclusive property of FadiDev and are protected by international
          copyright, trademark, and other intellectual property laws.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p className="mt-4">
          {{APP_NAME}} is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, either express or implied. We do not
          warrant that the App will be uninterrupted, error-free, or free of
          harmful components.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p className="mt-4">
          To the fullest extent permitted by applicable law, FadiDev shall not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or revenues, whether incurred directly
          or indirectly, or any loss of data, use, or goodwill arising out of your
          use of {{APP_NAME}}.
        </p>
      </Section>

      <Section title="Changes to These Terms">
        <p className="mt-4">
          We reserve the right to modify these Terms at any time. Any changes
          will be posted on this page with an updated revision date. Your
          continued use of the App after changes are posted constitutes your
          acceptance of the modified Terms.
        </p>
      </Section>

      <Section title="Governing Law">
        <p className="mt-4">
          These Terms shall be governed by and construed in accordance with
          applicable law, without regard to conflict of law principles.
        </p>
      </Section>

      <Section title="Contact Us">
        <p className="mt-4">
          If you have any questions about these Terms, please contact us at:{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">support@fadidev.app</a>
        </p>
      </Section>
    </LegalPage>
  );
}
