import { apps } from "@/data/apps";
import { AppStoreBadge, PlayStoreBadge } from "@/components/StoreBadges";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            FadiDev
          </h1>
          <p className="mt-4 text-lg text-accent font-medium">
            Crafting beautiful apps for iOS &amp; Android
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted max-w-xl mx-auto">
            We are an indie app studio focused on building premium mobile
            experiences. Clean design, thoughtful features, and attention to
            detail — that&apos;s what drives every app we make.
          </p>
        </div>
      </section>

      {/* Apps */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-center">
            Our Apps
          </h2>

          {apps.length === 0 ? (
            <p className="mt-8 text-center text-muted">
              New apps coming soon. Stay tuned!
            </p>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apps/${app.slug}`}
                  className="group rounded-xl border border-border bg-card-bg p-6 transition-shadow hover:shadow-md"
                >
                  {/* Icon placeholder */}
                  <div
                    className="h-16 w-16 rounded-2xl"
                    style={{ backgroundColor: app.iconColor || "#2563EB" }}
                  />
                  <h3 className="mt-4 text-lg font-semibold group-hover:text-accent transition-colors">
                    {app.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {app.description}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <AppStoreBadge url={app.appStoreUrl} />
                    <PlayStoreBadge url={app.playStoreUrl} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
