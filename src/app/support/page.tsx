import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with FadiDev apps. One person builds them, and the same person answers.",
};

const faqs = [
  {
    question: "How do I cancel a subscription?",
    answer: (
      <p>
        Subscriptions are managed by Apple, not inside the app. Open Settings
        &rarr; tap your name &rarr; Subscriptions &rarr; select the app &rarr;
        Cancel Subscription.
      </p>
    ),
  },
  {
    question: "How do I restore a purchase?",
    answer: (
      <p>
        Make sure you&apos;re signed in with the same Apple ID you bought it
        with, then tap &quot;Restore Purchases&quot; in the app&apos;s settings.
        If it still doesn&apos;t show up, email me.
      </p>
    ),
  },
  {
    question: "Something is broken. What should I do?",
    answer: (
      <p>
        Check that you have the latest version, then force-quit the app and
        reopen it. If it&apos;s still broken, email me what happened, your
        device model, and your iOS version — I read every report, and bugs from
        these emails usually get fixed in the next update.
      </p>
    ),
  },
  {
    question: "How do I request a refund?",
    answer: (
      <p>
        Refunds go through Apple: sign in at{" "}
        <a
          href="https://reportaproblem.apple.com"
          className="text-foreground underline underline-offset-4 hover:decoration-current"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>{" "}
        and pick the purchase. Apple decides, but they&apos;re usually
        reasonable about it.
      </p>
    ),
  },
  {
    question: "How do I delete my data?",
    answer: (
      <p>
        Delete the app. That&apos;s genuinely it — everything lives on your
        device, so uninstalling removes all of it. There&apos;s no account to
        close and no server copy to chase down.
      </p>
    ),
  },
];

export default function SupportPage() {
  return (
    <div className="px-6 pt-20 pb-24 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="rise rise-1 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-tight">
          Support
        </h1>
        <p className="rise rise-2 mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
          One person builds these apps, and the same person answers. Email{" "}
          <a
            href="mailto:support@fadidev.app"
            className="text-foreground underline underline-offset-4 hover:decoration-current"
          >
            support@fadidev.app
          </a>{" "}
          — I usually reply within a day or two.
        </p>

        <div className="rise rise-3 mt-16 max-w-3xl">
          <h2 className="prompt">cat faq.txt</h2>
          <div className="mt-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-border py-7">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <div className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-muted">
                  {faq.answer}
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
