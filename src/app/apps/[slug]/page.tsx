import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import { AppStoreBadge, PlayStoreBadge } from "@/components/StoreBadges";
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
    openGraph: {
      title: app.name,
      description: app.tagline,
    },
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div
            className="h-24 w-24 rounded-[1.5rem] shadow-lg"
            style={{ backgroundColor: app.iconColor || "#2563EB" }}
          />
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {app.name}
          </h1>
          <p className="mt-3 text-lg text-accent font-medium">{app.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-muted max-w-lg">
            {app.description}
          </p>
          <div className="mt-6 flex gap-4">
            <AppStoreBadge url={app.appStoreUrl} />
            <PlayStoreBadge url={app.playStoreUrl} />
          </div>
        </div>

        {/* Screenshots placeholder */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-center">Screenshots</h2>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 h-[400px] w-[200px] rounded-2xl bg-border flex items-center justify-center text-muted text-sm"
              >
                Screenshot {i}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-center">Features</h2>
          <ul className="mt-6 space-y-3">
            {app.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border bg-card-bg p-4"
              >
                <span className="mt-0.5 text-accent font-bold">&#10003;</span>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <div className="mt-16 flex justify-center gap-6 text-sm text-muted">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
