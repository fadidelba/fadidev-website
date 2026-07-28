import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Dar Darija",
  description: "Terms of Service for Dar Darija — Learn Moroccan Arabic as a family.",
};

export default function DardarijaTermsPage() {
  return (
    <LegalPage title="Terms of Service" app="dardarija" lastUpdated="2026-07-28">
      <Section title="Acceptance of Terms">
        <p className="mt-4">
          By downloading, installing, or using Dar Darija (&quot;the App&quot;),
          developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
          you agree to be bound by these Terms of Service (&quot;Terms&quot;). If
          you do not agree to these Terms, please do not use the App.
        </p>
      </Section>

      <Section title="Description of Service">
        <p className="mt-4">
          Dar Darija is a family app for learning Darija (Moroccan Arabic)
          together — three age-appropriate modes over one shared vocabulary,
          from age 4 to grown-ups. Progress belongs to the family rather than
          to a single learner: parents can listen back to their kids&apos;
          recordings, and conversation prompts push you out of the app and onto
          the actual dinner table. The App works offline, needs no account, and
          shows no ads.
        </p>
      </Section>

      <Section title="Use of the App">
        <p className="mt-4">
          You may use Dar Darija for personal, non-commercial purposes in
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

      <Section title="Intellectual Property">
        <p className="mt-4">
          All content, features, and functionality of Dar Darija — including
          but not limited to text, graphics, logos, icons, images, and software —
          are the exclusive property of FadiDev and are protected by international
          copyright, trademark, and other intellectual property laws.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p className="mt-4">
          Dar Darija is provided &quot;as is&quot; and &quot;as available&quot;
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
          use of Dar Darija.
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
