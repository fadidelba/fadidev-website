import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Qrisp",
  description: "Terms of Service for Qrisp — Premium QR & Barcode Scanner.",
};

export default function QrispTermsPage() {
  return (
    <LegalPage title="Terms of Service" app="qrisp" lastUpdated="2026-07-27">
      <Section title="Acceptance of Terms">
        <p className="mt-4">
          By downloading, installing, or using Qrisp (&quot;the App&quot;),
          developed by FadiDev (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;), you agree to be bound by these Terms of Service
          (&quot;Terms&quot;). If you do not agree to these Terms, please do
          not use the App.
        </p>
      </Section>

      <Section title="Description of Service">
        <p className="mt-4">
          Qrisp is a QR code and barcode scanner application that allows you
          to scan, create, and manage QR codes and barcodes. The App includes
          both free and premium features available through optional in-app
          subscriptions.
        </p>
      </Section>

      <Section title="Use of the App">
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
      </Section>

      <Section title="Free and Premium Features">
        <p className="mt-4">
          Qrisp offers core scanning functionality for free. Certain advanced
          features — such as batch scanning, custom QR code colors, and
          search within scan history — require a premium subscription.
        </p>
        <p className="mt-3">
          Free users may generate a limited number of QR codes per day. This
          limit resets daily.
        </p>
      </Section>

      <Section title="Subscriptions and In-App Purchases">
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
            <strong className="text-foreground">Billing:</strong> Payment is charged to your Apple ID at
            confirmation of purchase. Your account will be charged for renewal
            within 24 hours prior to the end of the current period.
          </li>
          <li>
            <strong className="text-foreground">Cancellation:</strong> You can manage and cancel your
            subscriptions in Settings &rarr; Apple ID &rarr; Subscriptions, or
            from within Qrisp under Settings.
          </li>
          <li>
            <strong className="text-foreground">Free Trials:</strong> If a free trial is offered, any
            unused portion of the trial will be forfeited when you purchase a
            subscription.
          </li>
        </ul>
      </Section>

      <Section title="Refund Policy">
        <p className="mt-4">
          All purchases are processed through the Apple App Store. Refund
          requests must be submitted directly to Apple:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong className="text-foreground">Apple:</strong> Visit{" "}
            <a href="https://reportaproblem.apple.com" className="text-foreground underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>
          </li>
        </ul>
        <p className="mt-4">
          We do not process payments directly and therefore cannot issue
          refunds. All refund decisions are at the sole discretion of Apple.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p className="mt-4">
          Qrisp uses third-party services for specific functionality:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong className="text-foreground">Apple StoreKit:</strong> For purchases and subscription
            management. Qrisp uses no other purchase provider.
          </li>
          <li>
            <strong className="text-foreground">Product Lookup APIs:</strong> Open Food Facts and Open
            Beauty Facts, used when you scan a product barcode. These services
            are provided as-is, and we are not responsible for the accuracy of
            their data.
          </li>
        </ul>
        <p className="mt-4">
          These services have their own terms of service and privacy policies.
          Your use of these services through Qrisp is subject to their
          respective terms.
        </p>
      </Section>

      <Section title="Scanned Content">
        <p className="mt-4">
          Qrisp scans and decodes QR codes and barcodes created by third
          parties. We are not responsible for the content, accuracy, or safety
          of any information encoded in scanned codes. Exercise caution when
          opening URLs or following instructions from scanned codes,
          especially from unknown sources.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p className="mt-4">
          All content, features, and functionality of Qrisp — including but
          not limited to text, graphics, logos, icons, images, and software —
          are the exclusive property of FadiDev and are protected by
          international copyright, trademark, and other intellectual property
          laws.
        </p>
      </Section>

      <Section title="Disclaimer of Warranties">
        <p className="mt-4">
          Qrisp is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, either express or implied. We do not
          warrant that the App will be uninterrupted, error-free, or free of
          harmful components. We do not guarantee the accuracy of barcode or
          QR code scanning results.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p className="mt-4">
          To the fullest extent permitted by applicable law, FadiDev shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits or revenues, whether
          incurred directly or indirectly, or any loss of data, use, or
          goodwill arising out of your use of Qrisp.
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
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
