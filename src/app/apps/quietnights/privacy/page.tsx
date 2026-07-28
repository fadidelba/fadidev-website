import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — QuietNights",
  description: "Privacy Policy for QuietNights — Nursery noise & sleep monitor.",
};

export default function QuietnightsPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="quietnights" lastUpdated="2026-07-10">
      <Section title="The short version">
        <p className="mt-4">
          <strong className="text-foreground">QuietNights collects nothing.</strong> It runs
          entirely on your device. We have no servers, no analytics, no accounts, and no
          third-party SDKs. No audio is ever recorded.
        </p>
      </Section>

      <Section title="Microphone">
        <p className="mt-4">
          QuietNights uses the microphone only to measure ambient sound levels (decibels) in
          real time during a session you explicitly start and end.{" "}
          <strong className="text-foreground">
            No audio is ever recorded, saved, or transmitted.
          </strong>{" "}
          Only numeric decibel values are stored, on your device.
        </p>
      </Section>

      <Section title="Your data stays on your device">
        <p className="mt-4">
          Sessions, settings, and calibration are stored locally on your iPhone. If you buy
          QuietNights Pro and enable iCloud sync, that data is stored in{" "}
          <em>your own</em> private iCloud account (provided by Apple) so it can sync across
          your devices. It is never sent to us and we cannot see it. iCloud sync is optional
          and off by default.
        </p>
      </Section>

      <Section title="Purchases">
        <p className="mt-4">
          The one-time Pro purchase is processed by Apple through the App Store. We never
          receive your name, payment card, or billing details.
        </p>
      </Section>

      <Section title="No tracking">
        <p className="mt-4">
          No third-party SDKs, no advertising identifiers, no tracking, no cookies, no
          analytics of any kind.
        </p>
      </Section>

      <Section title="Children">
        <p className="mt-4">
          QuietNights is a tool for parents. Because it collects no data at all, it collects
          no data from or about children.
        </p>
      </Section>

      <Section title="Contact">
        <p className="mt-4">
          Questions about this policy? Email{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
