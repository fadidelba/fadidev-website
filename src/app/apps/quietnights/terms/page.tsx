import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — QuietNights",
  description: "Terms of Service for QuietNights — Nursery noise & sleep monitor.",
};

export default function QuietnightsTermsPage() {
  return (
    <LegalPage title="Terms of Service" app="quietnights" lastUpdated="2026-07-10">
      <Section title="License">
        <p className="mt-4">
          QuietNights is licensed, not sold, to you for personal use on your Apple devices,
          subject to Apple&apos;s{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-foreground underline underline-offset-4"
          >
            Standard EULA
          </a>
          .
        </p>
      </Section>

      <Section title="Purchases">
        <p className="mt-4">
          QuietNights Pro is a one-time, non-consumable purchase — no subscription, no free
          trial, no ads. Price and terms are shown before you buy. Purchases are handled by
          Apple; refunds are subject to Apple&apos;s policies.
        </p>
      </Section>

      <Section title="Not a medical device">
        <p className="mt-4">
          <strong className="text-foreground">
            QuietNights is a measurement aid for general awareness, not a medical, safety, or
            hearing-diagnosis device.
          </strong>{" "}
          Decibel readings are estimates from a consumer smartphone microphone, not a
          certified sound level meter, and may differ from professional instruments. The
          pediatric reference levels (e.g. AAP safe-sleep, hearing-safe) are cited guidance to
          help you judge your environment — they are not a clinical assessment. Do not rely on
          QuietNights for medical decisions; consult a qualified professional for any health
          concern.
        </p>
      </Section>

      <Section title="Use of the App">
        <p className="mt-4">
          You may use QuietNights for personal, non-commercial purposes in accordance with
          these Terms and all applicable laws. You agree not to:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Reverse engineer, decompile, or disassemble any part of the App</li>
          <li>Use the App for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to any part of the App or related systems</li>
          <li>Modify, adapt, or create derivative works based on the App</li>
        </ul>
      </Section>

      <Section title="No warranty">
        <p className="mt-4">
          The App is provided &quot;as is&quot;, without warranty of any kind. To the extent
          permitted by law, the developer is not liable for any damages arising from its use.
        </p>
      </Section>

      <Section title="Contact">
        <p className="mt-4">
          Questions about these terms? Email{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
