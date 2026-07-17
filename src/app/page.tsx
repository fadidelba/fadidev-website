import Image from "next/image";
import Link from "next/link";
import { apps } from "@/data/apps";
import AppGlyph from "@/components/AppGlyph";
import { AppStoreButton, InDevelopmentTag } from "@/components/StoreBadges";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  const featured = apps.find((a) => a.status === "live") ?? apps[0];
  const upcoming = apps.filter((a) => a.slug !== featured.slug);

  return (
    <>
      {/* Hero — the studio thesis, plus the shelf of marks */}
      <section className="px-6 pt-40 pb-24 sm:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="spec-label rise rise-1 text-muted">
            FadiDev · one-person app studio
          </p>
          <h1 className="rise rise-2 mt-6 max-w-[16ch] font-display text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[1.02] tracking-tight">
            Small, careful apps for&nbsp;iOS.
          </h1>
          <p className="rise rise-3 mt-8 max-w-[46ch] text-lg leading-relaxed text-muted">
            Each one does a single job well, runs on your device, and is yours
            with one purchase. No accounts, no ads, no tracking.
          </p>

          {/* the shelf */}
          <div className="rise rise-4 mt-14 flex flex-wrap items-end gap-4">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={`/apps/${app.slug}`}
                title={app.name}
                className="app-world group flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border transition-transform duration-200 hover:-translate-y-1.5"
                style={
                  {
                    "--app": app.iconColor,
                    background: "var(--app-tint)",
                    borderColor: "var(--app-line)",
                    color: "var(--app-tone)",
                  } as React.CSSProperties
                }
              >
                <AppGlyph slug={app.slug} className="h-9 w-9" />
              </Link>
            ))}
          </div>
          <p className="rise rise-5 spec-label mt-5 text-faint">
            {apps.filter((a) => a.status === "live").length} in the App Store ·{" "}
            {upcoming.length} on the workbench
          </p>
        </div>
      </section>

      {/* Featured: the shipped app, in its own color world */}
      <section id="apps" className="scroll-mt-24 px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div
              className="app-world overflow-hidden rounded-[28px] border"
              style={
                {
                  "--app": featured.iconColor,
                  background: "var(--app-tint)",
                  borderColor: "var(--app-line)",
                } as React.CSSProperties
              }
            >
              <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
                <div className="flex flex-col justify-center">
                  <div className="group flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                      style={{
                        background: "var(--app-tint-strong)",
                        borderColor: "var(--app-line)",
                        color: "var(--app-tone)",
                      }}
                    >
                      <AppGlyph slug={featured.slug} className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {featured.name}
                      </h2>
                      <p className="text-sm text-muted">{featured.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-muted">
                    {featured.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                    {featured.specs.map((s) => (
                      <span key={s} className="spec-label" style={{ color: "var(--app-tone)" }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-5">
                    <AppStoreButton url={featured.appStoreUrl} size="lg" />
                    <Link
                      href={`/apps/${featured.slug}`}
                      className="text-sm font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-current"
                    >
                      More about {featured.name}
                    </Link>
                  </div>
                </div>

                {/* real store screenshots, leaning like prints on a shelf */}
                {featured.screenshots ? (
                  <div className="relative mx-auto flex items-end justify-center lg:mx-0">
                    <div className="relative z-10 w-[46%] max-w-[220px] -rotate-2 overflow-hidden rounded-[22px] border shadow-xl transition-transform duration-300 hover:-translate-y-2"
                      style={{ borderColor: "var(--app-line)" }}>
                      <Image src={`/apps/${featured.slug}/1.png`} alt={`${featured.name} — puzzle mode`} width={405} height={880} className="block h-auto w-full" priority />
                    </div>
                    <div className="relative z-20 -ml-10 w-[50%] max-w-[240px] translate-y-4 overflow-hidden rounded-[22px] border shadow-2xl transition-transform duration-300 hover:-translate-y-2"
                      style={{ borderColor: "var(--app-line)" }}>
                      <Image src={`/apps/${featured.slug}/2.png`} alt={`${featured.name} — mission mode`} width={405} height={880} className="block h-auto w-full" priority />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The workbench */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                On the workbench
              </h2>
              <span className="spec-label hidden text-faint sm:block">
                next up from the studio
              </span>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((app, i) => (
              <FadeIn key={app.slug} delay={i * 0.08}>
                <Link
                  href={`/apps/${app.slug}`}
                  className="app-world group flex h-full flex-col rounded-[22px] border bg-background-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={
                    {
                      "--app": app.iconColor,
                      borderColor: "var(--border)",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-[15px] border"
                    style={{
                      background: "var(--app-tint)",
                      borderColor: "var(--app-line)",
                      color: "var(--app-tone)",
                    }}
                  >
                    <AppGlyph slug={app.slug} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight">
                    {app.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{app.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {app.description.length > 130
                      ? app.description.slice(0, 127).trimEnd() + "…"
                      : app.description}
                  </p>
                  <div className="mt-6">
                    <InDevelopmentTag />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principles — what every FadiDev app promises */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="spec-label text-muted">Every app from this studio</h2>
          </FadeIn>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {[
              {
                title: "Runs on your device",
                body: "Your data stays on your phone. No servers of ours to trust, because there are none.",
              },
              {
                title: "Buy once, own it",
                body: "A fair one-time price. No subscriptions where a purchase will do, and never any ads.",
              },
              {
                title: "Does one job well",
                body: "Small tools with a clear purpose, built and maintained by one person who answers your email.",
              },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
