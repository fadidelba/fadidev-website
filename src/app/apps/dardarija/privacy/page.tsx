import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Dar Darija",
  description: "Privacy Policy for Dar Darija — Learn Moroccan Arabic as a family.",
};

export default function DardarijaPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" app="dardarija" lastUpdated="2026-07-28">
      <Section title="Introduction">
        <p className="mt-4">
          FadiDev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) develops and operates
          Dar Darija, a family app for learning Darija (Moroccan Arabic)
          together, built for everyone from age 4 to grown-ups. Because it is
          made for families with young children, this Privacy Policy is written
          to be read by a parent: it explains exactly what the app stores, what
          it does with recordings, and what leaves the device (nothing).
        </p>
        <p className="mt-3">
          By using Dar Darija, you agree to the practices described in this
          policy.
        </p>
      </Section>

      <Section title="Privacy-First Design">
        <p className="mt-4">
          Dar Darija is designed with your privacy in mind. The app operates
          primarily on your device, and we do not collect, store, or transmit
          your personal data to our servers. There are no user accounts, no
          analytics tracking, and no advertising in Dar Darija.
        </p>
      </Section>

      <Section title="Data Stored on Your Device">
        <p className="mt-4">
          All data generated while using Dar Darija is stored locally on your
          device and is never transmitted to us. This includes:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>The names or nicknames you give the learners in your family</li>
          <li>Learning progress: which words have been practised, and when</li>
          <li>Voice recordings made in the app (see below)</li>
          <li>Your app settings and preferences</li>
          <li>Your purchase/entitlement status (kept on-device via Apple StoreKit)</li>
        </ul>
        <p className="mt-4">
          Family profiles are just labels you type in. The app never asks for a
          real name, an age, an email address, or a photo.
        </p>
      </Section>

      <Section title="Microphone and Recordings">
        <p className="mt-4">
          Dar Darija lets a learner record themselves saying a word so that a
          parent can listen back and give a thumbs-up. This is the only reason
          the app asks for microphone access, and iOS will ask you for that
          permission the first time — you can decline, and the rest of the app
          keeps working.
        </p>
        <p className="mt-4">Recordings are handled as follows:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            They are written to the app&apos;s private storage on your device and
            are never uploaded to us or to anyone else.
          </li>
          <li>
            They are not sent to any speech-recognition or AI service. Nothing
            listens to them except the people in your family.
          </li>
          <li>
            You can delete any recording in the app, and deleting the app
            removes them all.
          </li>
        </ul>
      </Section>

      <Section title="Subscriptions and Purchases">
        <p className="mt-4">
          Dar Darija offers optional premium features via in-app subscriptions,
          handled entirely by Apple&apos;s native StoreKit. Subscription status is
          determined on-device by querying StoreKit; we use no third-party
          subscription SDKs. Payment details are handled entirely by Apple
          (App Store) — we never have access to your payment information.
        </p>
      </Section>

      <Section title="What We Do Not Collect">
        <p className="mt-4">Dar Darija does not collect or use:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Analytics or usage tracking data</li>
          <li>Crash reports or performance metrics</li>
          <li>Advertising identifiers (IDFA)</li>
          <li>Device identifiers sent to any server</li>
          <li>Location data</li>
          <li>Contact information</li>
          <li>Biometric data</li>
          <li>Speech recognition or any other cloud processing of recordings</li>
        </ul>
      </Section>

      <Section title="Data Security">
        <p className="mt-4">
          Since your data stays on your device, it is protected by your
          device&apos;s built-in security features including encryption and
          access controls. We recommend keeping your device software up to date
          and using a passcode or biometric lock.
        </p>
      </Section>

      <Section title="Data Deletion">
        <p className="mt-4">You can delete your data at any time:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>Delete individual entries directly in the app</li>
          <li>Delete the app to remove all locally stored data permanently</li>
        </ul>
        <p className="mt-4">
          Since we do not store your data on any server, deletion from your device
          is complete and permanent.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p className="mt-4">
          Dar Darija is meant to be used by children, with their parents. It
          collects no personal information from anyone, and that includes
          children: there is no account, no profile beyond a nickname you type
          in, no advertising, and no analytics. A child&apos;s voice recordings
          stay in the app&apos;s storage on your device and are never transmitted.
          Because nothing is collected, there is nothing we could disclose,
          sell, or hand to a third party. If you are a parent or guardian with
          a question, contact us at{" "}
          <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">
            support@fadidev.app
          </a>.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p className="mt-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date. We encourage you
          to review this policy periodically.
        </p>
      </Section>

      <Section title="Contact Us">
        <p className="mt-4">
          If you have any questions about this Privacy Policy, please contact us
          at: <a href="mailto:support@fadidev.app" className="text-foreground underline underline-offset-4">support@fadidev.app</a>
        </p>
      </Section>
    </LegalPage>
  );
}
