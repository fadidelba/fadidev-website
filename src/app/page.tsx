import Image from "next/image";
import Link from "next/link";
import { apps } from "@/data/apps";
import { notes } from "@/data/notes";
import AppGlyph from "@/components/AppGlyph";
import { AppStoreButton } from "@/components/StoreBadges";

export default function HomePage() {
  const featured = apps.find((a) => a.status === "live") ?? apps[0];

  // the featured app's plate, read like an instrument label
  const plate: [string, string][] = [
    ["platform", "iOS 17+"],
    ["price", "€1.99, once"],
    ["network", "none — fully offline"],
    ["languages", "7"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <h1 className="rise rise-1 max-w-[14ch] font-display text-[clamp(2rem,6.5vw,4.9rem)] font-extrabold uppercase leading-[0.98]">
          Apps, built like instruments.
        </h1>
        <p className="rise rise-2 mt-8 max-w-[52ch] text-lg leading-relaxed text-muted">
          I&apos;m Fadi. In a one-person workshop in Germany I build small,
          careful apps for iOS — each one does a single job, runs entirely on
          your device, and is yours with one purchase. No accounts, no ads, no
          tracking.
        </p>
      </section>

      {/* The instrument panel — every app is a row */}
      <section id="apps" className="crosshair scroll-mt-24 border-t border-border">
        <h2 className="prompt px-6 pt-6">ls ./apps</h2>
        <div className="mt-4">
          {apps.map((app, i) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="app-world boot group grid grid-cols-[auto_auto_1fr] items-center gap-x-4 border-t border-border px-6 py-6 transition-colors first:border-t-0 hover:bg-(--app-tint) sm:grid-cols-[auto_auto_240px_1fr_auto] sm:gap-x-6"
              style={
                {
                  "--app": app.iconColor,
                  animationDelay: `${0.35 + i * 0.09}s`,
                } as React.CSSProperties
              }
            >
              <span
                className={`lamp ${app.status === "live" ? "" : "lamp-idle"}`}
                aria-hidden
              />
              <span style={{ color: "var(--app-tone)" }}>
                <AppGlyph slug={app.slug} className="h-8 w-8" />
              </span>
              <h3 className="font-display text-xl font-bold">{app.name}</h3>
              <p className="col-span-3 mt-1.5 text-sm text-muted sm:col-span-1 sm:mt-0">
                {app.tagline}
              </p>
              <span
                className="spec-label hidden sm:block"
                style={{
                  color: app.status === "live" ? "var(--app-tone)" : "var(--faint)",
                }}
              >
                {app.status === "live" ? "in the app store →" : "in development"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured — the shipped instrument, lit in its own color */}
      <section
        className="app-world crosshair overflow-hidden border-t border-border"
        style={{ "--app": featured.iconColor } as React.CSSProperties}
      >
        <div
          className="grid gap-12 px-6 pt-14 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8"
          style={{ background: "var(--app-tint)" }}
        >
          <div className="flex flex-col justify-center pb-14 sm:pb-16">
            <p className="spec-label" style={{ color: "var(--app-tone)" }}>
              001 / shipped
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase sm:text-4xl">
              {featured.name}
            </h2>
            <p className="mt-2 text-base text-muted">{featured.tagline}</p>

            <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-muted">
              {featured.description}
            </p>

            {/* the label plate */}
            <div
              className="mt-8 max-w-sm border font-mono text-[12px]"
              style={{ borderColor: "var(--app-line)" }}
            >
              {plate.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-t px-4 py-2 first:border-t-0"
                  style={{ borderColor: "var(--app-line)" }}
                >
                  <span className="uppercase tracking-[0.08em] text-faint">{k}</span>
                  <span style={{ color: "var(--app-tone)" }}>{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <AppStoreButton url={featured.appStoreUrl} size="lg" />
              <Link
                href={`/apps/${featured.slug}`}
                className="font-mono text-[13px] text-muted underline underline-offset-4 transition-colors hover:text-term"
              >
                more about {featured.name.toLowerCase()} →
              </Link>
            </div>
          </div>

          {/* real store screenshots in device frames */}
          {featured.screenshots ? (
            <div className="relative mx-auto flex w-full max-w-[440px] items-end justify-center self-end lg:mx-0">
              <div className="w-[47%] -rotate-2 translate-y-5">
                <div className="tilt-in device">
                  <Image src={`/apps/${featured.slug}/1.png`} alt={`${featured.name} — puzzle mode`} width={405} height={880} priority />
                </div>
              </div>
              <div className="z-10 -ml-8 w-[52%] rotate-1 translate-y-12">
                <div className="tilt-in device">
                  <Image src={`/apps/${featured.slug}/2.png`} alt={`${featured.name} — mission mode`} width={405} height={880} priority />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Workbench log */}
      <section className="crosshair border-t border-border px-6 py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="prompt">tail workbench.log</h2>
          <Link
            href="/writing"
            className="font-mono text-[13px] text-muted transition-colors hover:text-term"
          >
            all notes →
          </Link>
        </div>
        {notes.slice(0, 1).map((note) => (
          <Link key={note.slug} href={`/writing/${note.slug}`} className="group mt-8 block max-w-[72ch]">
            <p className="font-mono text-[12px] text-faint">
              {note.date} <span className="mx-2 text-border-strong">{"//"}</span>
              {note.app}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold underline decoration-transparent underline-offset-4 group-hover:decoration-current sm:text-2xl">
              {note.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{note.teaser}</p>
          </Link>
        ))}
      </section>

      {/* Why so small — one voice, no cards */}
      <section className="crosshair grid gap-8 border-t border-border px-6 py-16 lg:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
          Why so small?
        </h2>
        <div className="max-w-[60ch] space-y-5 text-[15px] leading-relaxed text-muted lg:pt-1">
          <p>
            Every app here follows the same three rules: it runs on your
            device, you buy it once, and it does one job well. There&apos;s no
            server behind any of them — nothing to sign into, nothing phoning
            home, nothing that stops working when a startup pivots.
          </p>
          <p>
            That&apos;s not a business strategy, it&apos;s just the kind of
            software I want on my own phone. And when you email support, the
            person who wrote the code reads it — usually the same day.
          </p>
        </div>
      </section>
    </>
  );
}
