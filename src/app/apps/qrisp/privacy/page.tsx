import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Qrisp",
  description: "Privacy Policy for Qrisp — Premium QR & Barcode Scanner.",
};

export default function QrispPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="qrisp" lastUpdated="2026-07-27">
      <Section title="Introduction">
        <p className="mt-4">
          FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops and operates
          Qrisp, a QR code and barcode scanner app for iOS. This
          Privacy Policy explains how we handle your information when you use
          Qrisp.
        </p>
        <p className="mt-3">
          By using Qrisp, you agree to the practices described in this policy.
        </p>
      </Section>

      <Section title="Privacy-First Design">
        <p className="mt-4">
          Qrisp is designed with your privacy in mind. The app operates
          primarily on your device, and we do not collect, store, or transmit
          your personal data to our servers. There are no user accounts, no
          analytics tracking, and no advertising in Qrisp.
        </p>
      </Section>

      <Section title="Data Stored on Your Device">
        <p className="mt-4">
          All data generated while using Qrisp is stored locally on your
          device and is never transmitted to us. This includes:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong className="text-foreground">Scan History:</strong> The QR codes and barcodes you scan,
            including their content, type, and timestamps. You can delete your
            scan history at any time from within the app.
          </li>
          <li>
            <strong className="text-foreground">Favorites and Tags:</strong> Any scans you mark as favorites
            or organize with tags are stored only on your device.
          </li>
          <li>
            <strong className="text-foreground">Generated QR Codes:</strong> QR codes you create are
            processed and stored locally.
          </li>
          <li>
            <strong className="text-foreground">App Preferences:</strong> Your settings such as theme mode,
            language, sound, and vibration preferences are stored locally on
            your device.
          </li>
        </ul>
      </Section>

      <Section title="Camera Access">
        <p className="mt-4">
          Qrisp requires access to your device&apos;s camera to scan QR codes
          and barcodes. Camera data is processed in real-time on your device
          and is never recorded, stored, or transmitted to any server.
        </p>
      </Section>

      <Section title="Photo Library Access">
        <p className="mt-4">
          Qrisp may request access to your photo library for two purposes:
          scanning QR codes from saved images and saving generated QR codes.
          We do not access, upload, or analyze any other photos in your
          library.
        </p>
      </Section>

      <Section title="Product Lookups">
        <p className="mt-4">
          When you scan a product barcode, Qrisp can look up what the product
          is. Only these services are contacted:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Open Food Facts</li>
          <li>Open Beauty Facts</li>
          <li>UPCitemdb</li>
        </ul>
        <p className="mt-4">
          Only barcodes are looked up. QR codes are never sent anywhere — a
          Wi-Fi password or bank transfer you scan stays on the device. A
          lookup sends the barcode number and your language preference, and
          nothing else. No personal
          information or device identifiers are shared. These services have
          their own privacy policies, and we encourage you to review them.
        </p>
      </Section>

      <Section title="Subscriptions and Purchases">
        <p className="mt-4">
          Qrisp offers optional Pro features as a weekly or yearly
          subscription, or as a one-time purchase. Purchases are handled
          entirely by Apple through StoreKit. We use no third-party
          subscription service, so no purchase data is shared with anyone
          but Apple, and we never see your payment information.
        </p>
        <p className="mt-3">
          Whether your Pro entitlement is active is verified on your device
          against the App Store. Nothing about it is stored on a server of
          ours — we do not operate one.
        </p>
      </Section>

      <Section title="Crash Reports">
        <p className="mt-4">
          Qrisp can send anonymous crash and performance reports through
          Apple&apos;s MetricKit. This is off by default and only happens if
          you switch it on in Settings. The reports contain no scanned or
          created content — no URLs, network names, passwords, IBANs or
          labels — and no identifier that points back to you.
        </p>
      </Section>

      <Section title="What We Do Not Collect">
        <p className="mt-4">Qrisp does not collect or use:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Analytics or usage tracking data</li>
          <li>Advertising identifiers (IDFA)</li>
          <li>Device identifiers sent to any server</li>
          <li>Location data</li>
          <li>Contact information</li>
          <li>Biometric data</li>
        </ul>
      </Section>

      <Section title="Data Security">
        <p className="mt-4">
          Since your data stays on your device, it is protected by your
          device&apos;s built-in security features including encryption and
          access controls. We recommend keeping your device software up to
          date and using a passcode or biometric lock.
        </p>
      </Section>

      <Section title="Data Deletion">
        <p className="mt-4">
          You can delete your scan history, favorites, and all app data at any
          time by clearing data within the app or by uninstalling Qrisp from
          your device. Since we do not store your data on any server, deletion
          from your device is complete and permanent.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p className="mt-4">
          Qrisp does not knowingly collect personal information from children
          under the age of 13. Since the app does not collect personal data
          from any user, it is safe for use by all ages. If you are a parent
          or guardian and have concerns, please contact us at{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>.
        </p>
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
          If you have any questions about this Privacy Policy, please contact
          us at:{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
