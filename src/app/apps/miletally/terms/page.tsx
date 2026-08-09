import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — MileTally",
  description: "Terms of Service for MileTally — Track miles, cut your taxes.",
};

export default function MiletallyTermsPage() {
  return (
    <LegalPage title="Terms of Service" app="miletally" lastUpdated="2026-08-10">
      <Section title="Acceptance of Terms">
        <p className="mt-4">
          By downloading, installing, or using MileTally (&quot;the App&quot;),
          developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
          you agree to be bound by these Terms of Service (&quot;Terms&quot;). If
          you do not agree to these Terms, please do not use the App.
        </p>
      </Section>

      <Section title="Description of Service">
        <p className="mt-4">
          MileTally is a local-first iOS mileage-and-expense logbook for US
          self-employed and gig workers. It turns every tap-to-log trip and
          imported earnings file into a live after-mileage net figure and an
          accountant-ready Schedule C summary. Optional premium features are
          available as a subscription or a one-time purchase.
        </p>
      </Section>

      <Section title="Not Tax Advice">
        <p className="mt-4">
          MileTally produces estimates and summary documents to help you organize
          your records. It is <strong className="text-foreground">not tax advice</strong>,
          and it does not file anything with the IRS — there is no e-filing and no
          automatic submission. The Schedule C summary and mileage log are reference
          documents to hand to a CPA or use while self-filing.
        </p>
        <p className="mt-3">
          The IRS standard mileage rate is applied per trip using the rate in effect
          on the day that trip was driven. We update those rates as the IRS publishes
          them, but you remain responsible for confirming the current figures and
          your own tax situation with a qualified tax professional.
        </p>
      </Section>

      <Section title="Use of the App">
        <p className="mt-4">
          You may use MileTally for personal, non-commercial purposes in
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

      <Section title="Free and Premium Features">
        <p className="mt-4">
          MileTally&apos;s core loop is free and stays free: unlimited trip logging,
          unlimited expenses, your live IRS mileage deduction, and classification on
          up to two platforms. There is no trip cap and no monthly reset.
        </p>
        <p className="mt-3">These features require MileTally Pro:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Unlimited platforms and the per-platform P&amp;L dashboard</li>
          <li>CSV earnings import</li>
          <li>Schedule C PDF export and the detailed mileage log</li>
          <li>Quarterly estimated-tax reminders</li>
        </ul>
      </Section>

      <Section title="Subscriptions and In-App Purchases">
        <p className="mt-4">
          MileTally Pro is sold three ways. The price and the renewal terms are
          always shown in the app before a purchase is confirmed.
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li><strong className="text-foreground">Monthly:</strong> $1.99 per month, auto-renewable</li>
          <li><strong className="text-foreground">Annual:</strong> $14.99 per year, auto-renewable</li>
          <li><strong className="text-foreground">Lifetime:</strong> $29.99, a one-time purchase — nothing renews and there is nothing to cancel</li>
        </ul>
        <p className="mt-4">By purchasing, you agree to the following:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong className="text-foreground">Auto-Renewal:</strong> A subscription automatically renews at the end of each billing period unless you cancel at least 24 hours before the renewal date. This does not apply to the Lifetime purchase.
          </li>
          <li>
            <strong className="text-foreground">Billing:</strong> Payment is charged to your Apple ID account at confirmation of purchase. For subscriptions, your account is charged for renewal within 24 hours prior to the end of the current period.
          </li>
          <li>
            <strong className="text-foreground">Cancellation:</strong> You can manage and cancel subscriptions through your device settings: Settings → Apple ID → Subscriptions.
          </li>
          <li>
            <strong className="text-foreground">No hidden trials:</strong> MileTally does not offer a free trial that converts into a charge. You pay the stated price at purchase, or you keep using the free tier.
          </li>
          <li>
            <strong className="text-foreground">Restore:</strong> A previous purchase can be restored on a new device from the paywall or from Settings.
          </li>
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
          All content, features, and functionality of MileTally — including
          but not limited to text, graphics, logos, icons, images, and software —
          are the exclusive property of FadiDev and are protected by international
          copyright, trademark, and other intellectual property laws.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p className="mt-4">
          MileTally is provided &quot;as is&quot; and &quot;as available&quot;
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
          use of MileTally. In particular, we are not liable for any tax
          penalties, interest, disallowed deductions, or other tax outcomes
          resulting from figures, estimates, or documents produced by the App —
          you are solely responsible for the accuracy of any tax filing you or
          your tax professional prepare.
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
