import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Mine Grid",
  description: "Privacy Policy for Mine Grid — a minesweeper you never have to guess at.",
};

export default function MinegridPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="minegrid" lastUpdated="2026-09-22">
      <Section title="The short version">
        <p className="mt-4">
          <strong className="text-foreground">
            The game runs entirely on your device. The ads do not.
          </strong>{" "}
          Mine Grid is free and funded by advertising, which is served by Google AdMob.
          Showing an ad means Google receives data about your device. Everything else —
          your boards, your times, your progress — stays on your iPhone or iPad. There is
          no account, and we run no servers of our own.
        </p>
      </Section>

      <Section title="What stays on your device">
        <p className="mt-4">
          Your best times, win rates, XP and level, daily streak, Journey progress, an
          unfinished round you can resume, and your settings (board look, sound, haptics,
          flag controls) are stored locally. The app also keeps a log of finished rounds —
          outcome, duration and the board seed — on the device, which we use for nothing
          but the game itself. None of it is transmitted anywhere and we cannot see it.
          Deleting the app deletes all of it. Every board is generated on the device and
          the game is fully playable with no connection at all.
        </p>
      </Section>

      <Section title="Advertising">
        <p className="mt-4">
          Ads are provided by Google AdMob. Mine Grid shows a full-screen ad after some
          finished rounds — never during a round — and optional ads you can choose to
          watch in exchange for a second chance after hitting a mine, a hint, or extra
          time in Rush. To serve and measure those ads, the Google Mobile Ads SDK collects:
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
          If you are in the EEA, the UK or Switzerland, Mine Grid asks for your consent
          before requesting any ad, using Google&apos;s consent dialog. Personalised ads
          are shown only if you agree — the legal basis is your consent under Art. 6(1)(a)
          GDPR. You can change or withdraw it at any time in the app: Settings → Privacy
          options. Withdrawing does not affect processing that already happened.
        </p>
        <p className="mt-4">
          Separately, iOS asks whether Mine Grid may track you across apps. If you decline,
          no advertising identifier is used and you will see non-personalised ads instead —
          the game itself is identical either way. You can change this under Settings →
          Privacy &amp; Security → Tracking.
        </p>
      </Section>

      <Section title="Removing the ads">
        <p className="mt-4">
          Mine Grid offers a one-time purchase that removes the full-screen ads for good.
          It is handled entirely by Apple&apos;s StoreKit: Apple takes the payment and
          tells the app, on the device, that you own it. We never receive your name,
          payment card, or billing details, and we hold no purchase record of our own —
          restoring the purchase on a new device asks Apple, not us. The optional ads for
          a second chance, a hint or extra time stay available if you want them; they are
          never shown unless you tap to watch one.
        </p>
      </Section>

      <Section title="Game Center">
        <p className="mt-4">
          Mine Grid supports Apple Game Center for leaderboards and achievements. If you
          are signed in to Game Center, your best times, the number of boards you cleared
          in Rush, your Journey level and your unlocked achievements are sent to Apple and
          shown under your Game Center identity — which may be visible to other players on
          public leaderboards. This is processing by Apple under the{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            className="text-foreground underline underline-offset-4"
          >
            Apple Privacy Policy
          </a>
          ; we never see who you are, only that a score exists. If you are not signed in,
          nothing is submitted and the game plays exactly the same. You can sign out or
          turn Game Center off under Settings → Game Center.
        </p>
      </Section>

      <Section title="Children">
        <p className="mt-4">
          Mine Grid is rated 4+ because it contains nothing objectionable, but it is a
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
          . Requests concerning Game Center go to Apple. Write to us at the address below
          and we will point you the right way. You also have the right to complain to a
          supervisory authority.
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
