import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Knight Grid",
  description: "Privacy Policy for Knight Grid — Solve the Knight's Tour.",
};

export default function KnightgridPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="knightgrid" lastUpdated="2026-07-12">
      <Section title="The short version">
        <p className="mt-4">
          <strong className="text-foreground">Knight Grid collects nothing.</strong> It is a
          single-player puzzle game that runs entirely on your device. We have no servers, no
          analytics, no accounts, and no third-party SDKs. The app never connects to the
          internet.
        </p>
      </Section>

      <Section title="Your data stays on your device">
        <p className="mt-4">
          Your solve history, best times, and settings (theme, piece style, haptics) are
          stored locally on your iPhone or iPad. They are never transmitted anywhere and we
          cannot see them. Deleting the app deletes this data.
        </p>
      </Section>

      <Section title="Purchases">
        <p className="mt-4">
          Knight Grid is a one-time purchase processed by Apple through the App Store. We
          never receive your name, payment card, or billing details.
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
          Knight Grid is rated 4+. Because it collects no data at all, it collects no data
          from or about children.
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
