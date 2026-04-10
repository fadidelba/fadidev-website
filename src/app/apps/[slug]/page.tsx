import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import { AppStoreBadge, PlayStoreBadge } from "@/components/StoreBadges";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
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

  return (
    <div className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-3xl">
        {/* Hero */}
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <div
              className="h-28 w-28 rounded-[1.75rem] shadow-lg"
              style={{ backgroundColor: app.iconColor || "#d4a574" }}
            />
            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
              {app.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{app.tagline}</p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              {app.description}
            </p>
            <div className="mt-8 flex gap-4">
              <AppStoreBadge url={app.appStoreUrl} />
              <PlayStoreBadge url={app.playStoreUrl} />
            </div>
          </div>
        </FadeIn>

        {/* Screenshots */}
        <FadeIn>
          <section className="mt-24">
            <h2 className="text-center text-2xl font-semibold tracking-tight">
              Screenshots
            </h2>
            <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-[420px] w-[210px] flex-shrink-0 items-center justify-center rounded-3xl border border-border bg-card-bg text-sm text-muted"
                >
                  Screenshot {i}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Features */}
        <section className="mt-24">
          <FadeIn>
            <h2 className="text-center text-2xl font-semibold tracking-tight">
              Features
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-4">
            {app.features.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card-bg p-6 transition-colors hover:bg-card-hover">
                  <span className="mt-0.5 text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Links */}
        <FadeIn>
          <div className="mt-24 flex justify-center gap-8 text-sm text-muted">
            <Link href={`/apps/${app.slug}/privacy`} className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href={`/apps/${app.slug}/terms`} className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/support" className="transition-colors hover:text-foreground">
              Support
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
