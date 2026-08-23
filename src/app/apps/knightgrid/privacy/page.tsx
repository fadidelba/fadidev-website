import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Knight Grid",
  description: "Privacy Policy for Knight Grid — Solve the Knight's Tour.",
};

export default function KnightgridPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="knightgrid" lastUpdated="2026-08-24">
      <Section title="The short version">
        <p className="mt-4">
          <strong className="text-foreground">
            The game runs entirely on your device. The ads do not.
          </strong>{" "}
          Knight Grid is free and funded by advertising, which is served by Google AdMob.
          Showing an ad means Google receives data about your device. Everything else —
          your solves, your times, your settings — stays on your iPhone or iPad. There is
          no account, and we run no servers of our own.
        </p>
      </Section>

      <Section title="What stays on your device">
        <p className="mt-4">
          Your solve history, best times, and settings (theme, piece style, haptics) are
          stored locally. They are never transmitted anywhere and we cannot see them.
          Deleting the app deletes this data. The puzzles themselves work without any
          connection.
        </p>
      </Section>

      <Section title="Advertising">
        <p className="mt-4">
          Ads are provided by Google AdMob. Knight Grid shows a full-screen ad after some
          finished games, and an optional ad you can choose to watch in exchange for
          revealing a solution. To serve and measure those ads, the Google Mobile Ads SDK
          collects:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Your IP address, which Google may use to estimate a coarse location</li>
          <li>
            Device and advertising identifiers — including Apple&apos;s advertising
            identifier (IDFA) if you allow tracking
          </li>
          <li>Advertising data — which ads were shown, and whether you interacted</li>
          <li>App interaction data, such as ad requests and views</li>
          <li>Crash logs, performance and other diagnostic data</li>
        </ul>
        <p className="mt-4">
          Google uses this to select and measure ads, and for analytics. We receive only
          aggregate earnings reports — never data about an individual person. How Google
          handles it is described in the{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-foreground underline underline-offset-4"
          >
            Google Privacy Policy
          </a>{" "}
          and in{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            className="text-foreground underline underline-offset-4"
          >
            how Google uses information from apps that use its services
          </a>
          .
        </p>
      </Section>

      <Section title="Your choices">
        <p className="mt-4">
          If you are in the EEA, the UK or Switzerland, Knight Grid asks for your consent
          before requesting any ad, using Google&apos;s consent dialog. Personalised ads
          are shown only if you agree — the legal basis is your consent under Art. 6(1)(a)
          GDPR. You can change or withdraw it at any time in the app: the gear menu →
          Privacy settings. Withdrawing does not affect processing that already happened.
        </p>
        <p className="mt-4">
          Separately, iOS asks whether Knight Grid may track you across apps. If you
          decline, no advertising identifier is used and you will see non-personalised ads
          instead — the game itself is identical either way. You can change this under
          Settings → Privacy &amp; Security → Tracking.
        </p>
      </Section>

      <Section title="If you bought the app">
        <p className="mt-4">
          Knight Grid was a paid app until August 2026. If you purchased it, it stays
          ad-free for you: the app checks your original App Store purchase on-device via
          Apple&apos;s StoreKit and then never loads the advertising SDK at all. That check
          reveals nothing to us — we never receive your name, payment card, or billing
          details.
        </p>
      </Section>

      <Section title="Children">
        <p className="mt-4">
          Knight Grid is rated 4+ because it contains nothing objectionable, but it is a
          general-audience puzzle game and is not directed at children. It is not part of
          the App Store Kids Category. We do not knowingly collect personal data from
          children under 13. If you believe a child has provided data through the ads in
          this app, contact us and we will help you raise it with Google.
        </p>
      </Section>

      <Section title="Your rights">
        <p className="mt-4">
          Under the GDPR you have the right to access, correct, delete, or restrict the
          processing of your personal data, and to object to it or request portability.
          Because we hold no data about you ourselves, requests concerning advertising
          data need to go to Google as the controller for that processing — start with the{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-foreground underline underline-offset-4"
          >
            Google Privacy Policy
          </a>
          . Write to us at the address below and we will point you the right way. You also
          have the right to complain to a supervisory authority.
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
