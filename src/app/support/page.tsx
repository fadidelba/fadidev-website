import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with FadiDev apps. Contact us or browse frequently asked questions.",
};

const faqs = [
  {
    question: "How do I cancel my subscription?",
    answer: (
      <>
        <p>
          Subscriptions are managed through your device&apos;s app store, not
          within our apps directly.
        </p>
        <p className="mt-3">
          <strong className="text-foreground">On iOS:</strong> Open Settings &rarr; tap your name (Apple ID)
          &rarr; Subscriptions &rarr; select the app &rarr; Cancel Subscription.
        </p>
        <p className="mt-3">
          <strong className="text-foreground">On Android:</strong> Open the Google Play Store &rarr; tap your
          profile icon &rarr; Payments &amp; subscriptions &rarr; Subscriptions
          &rarr; select the app &rarr; Cancel subscription.
        </p>
      </>
    ),
  },
  {
    question: "How do I restore my purchase?",
    answer: (
      <>
        <p>
          If you previously purchased a subscription or in-app purchase and it
          is not showing up:
        </p>
        <p className="mt-3">
          <strong className="text-foreground">On iOS:</strong> Make sure you are signed in with the same
          Apple ID you used for the original purchase. Most apps have a
          &quot;Restore Purchases&quot; button in the settings or paywall screen.
        </p>
        <p className="mt-3">
          <strong className="text-foreground">On Android:</strong> Make sure you are signed in with the same
          Google account. Try tapping &quot;Restore Purchases&quot; in the app, or
          reinstall the app.
        </p>
      </>
    ),
  },
  {
    question: "The app is not working. What should I do?",
    answer: (
      <>
        <p>Try the following steps:</p>
        <ol className="mt-3 list-decimal space-y-2 pl-6">
          <li>Make sure you have the latest version of the app installed.</li>
          <li>Restart the app by closing it completely and reopening it.</li>
          <li>Restart your device.</li>
          <li>
            If the issue persists, please contact us at{" "}
            <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
              support@fadidev.app
            </a>{" "}
            with a description of the problem, your device model, and OS version.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "How do I request a refund?",
    answer: (
      <>
        <p>Refunds are handled by the platform where you made the purchase:</p>
        <p className="mt-3">
          <strong className="text-foreground">On iOS:</strong> Visit{" "}
          <a
            href="https://reportaproblem.apple.com"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            reportaproblem.apple.com
          </a>{" "}
          and sign in with your Apple ID to request a refund.
        </p>
        <p className="mt-3">
          <strong className="text-foreground">On Android:</strong> Open the Google Play Store &rarr; tap
          your profile icon &rarr; Payments &amp; subscriptions &rarr; Budget
          &amp; order history &rarr; find the order and request a refund.
        </p>
      </>
    ),
  },
  {
    question: "How do I delete my data?",
    answer: (
      <>
        <p>
          We collect minimal data. If you would like to request the deletion of
          any data associated with your use of our apps, please send an email to{" "}
          <a href="mailto:support@fadidev.app" className="text-accent hover:underline">
            support@fadidev.app
          </a>{" "}
          with the subject line &quot;Data Deletion Request.&quot; We will process your
          request promptly.
        </p>
        <p className="mt-3">
          Uninstalling the app will remove all locally stored data from your
          device.
        </p>
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Support
          </h1>
          <p className="mt-4 text-center text-lg text-muted">
            Need help? We&apos;re here for you.
          </p>
        </FadeIn>

        {/* Contact */}
        <FadeIn delay={0.1}>
          <div className="mt-14 rounded-3xl border border-border bg-card-bg p-10 text-center">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="mt-3 text-sm text-muted">
              For any questions, issues, or feedback, reach out to us at:
            </p>
            <a
              href="mailto:support@fadidev.app"
              className="mt-4 inline-block text-lg font-medium text-accent hover:underline"
            >
              support@fadidev.app
            </a>
            <p className="mt-3 text-xs text-muted">
              We typically respond within 24 &ndash; 48 hours.
            </p>
          </div>
        </FadeIn>

        {/* FAQ */}
        <div className="mt-24">
          <FadeIn>
            <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-5">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card-bg p-8 transition-colors hover:bg-card-hover">
                  <h3 className="text-base font-semibold">{faq.question}</h3>
                  <div className="mt-4 text-[15px] leading-[1.8] text-muted">
                    {faq.answer}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
