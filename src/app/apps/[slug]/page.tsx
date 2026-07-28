import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import AppGlyph from "@/components/AppGlyph";
import { AppStoreButton, InDevelopmentTag } from "@/components/StoreBadges";
import type { Metadata } from "next";

export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.tagline,
    openGraph: { title: app.name, description: app.tagline },
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  const shots = Array.from({ length: app.screenshots ?? 0 }, (_, i) => i + 1);

  return (
    <div
      className="app-world"
      style={{ "--app": app.iconColor } as React.CSSProperties}
    >
      {/* Hero in the app's color world */}
      <section
        className="border-b px-6 pt-16 pb-16 sm:pb-20"
        style={{ background: "var(--app-tint)", borderColor: "var(--app-line)" }}
      >
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="spec-label inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="15 18 9 12 15 6" />
            </svg>
            FadiDev
          </Link>

          <div className="group mt-10 flex items-center gap-5">
            <div
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border"
              style={{
                background: "var(--app-tint-strong)",
                borderColor: "var(--app-line)",
                color: "var(--app-tone)",
              }}
            >
              <AppGlyph slug={app.slug} className="h-9 w-9" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
                {app.name}
              </h1>
              <p className="mt-1 text-base text-muted sm:text-lg">{app.tagline}</p>
            </div>
          </div>

          <p className="mt-8 max-w-[52ch] text-[15px] leading-relaxed text-muted sm:text-base">
            {app.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {app.specs.map((s) => (
              <span key={s} className="spec-label" style={{ color: "var(--app-tone)" }}>
                {s}
              </span>
            ))}
          </div>

          <div className="mt-9">
            {app.status === "live" ? (
              <AppStoreButton url={app.appStoreUrl} size="lg" />
            ) : (
              <InDevelopmentTag />
            )}
          </div>
        </div>
      </section>

      {/* Real screenshots, only when we have them */}
      {shots.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-6">
              {shots.map((n) => (
                <div key={n} className="tilt-in device w-[248px]">
                  <Image
                    src={`/apps/${app.slug}/${n}.png`}
                    alt={`${app.name} screenshot ${n}`}
                    width={405}
                    height={880}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="spec-label text-muted">What it does</h2>
          <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {app.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <span className="mt-[3px] shrink-0" style={{ color: "var(--app-tone)" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust line */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div
            className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--app-line)" }}
          >
            <p className="text-sm leading-relaxed text-muted">
              Questions about {app.name}? I build it, and I answer the email.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <Link href="/support" className="underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-current">
                Support
              </Link>
              <Link href={`/apps/${app.slug}/privacy`} className="underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-current">
                Privacy
              </Link>
              {app.hasTerms && (
                <Link href={`/apps/${app.slug}/terms`} className="underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-current">
                  Terms
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
