import { apps } from "@/data/apps";
import { AppStoreBadge, PlayStoreBadge } from "@/components/StoreBadges";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-40 pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gradient-from to-gradient-to" />
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
              Crafting beautiful
              <br />
              apps for mobile
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
              We are an indie app studio focused on building premium
              experiences for iOS and Android. Clean design, thoughtful
              features, and attention to detail.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Apps */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Apps
            </h2>
          </FadeIn>

          {apps.length === 0 ? (
            <FadeIn delay={0.1}>
              <p className="mt-10 text-center text-muted">
                New apps coming soon. Stay tuned!
              </p>
            </FadeIn>
          ) : (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app, i) => (
                <FadeIn key={app.slug} delay={i * 0.1}>
                  <Link
                    href={`/apps/${app.slug}`}
                    className="group block rounded-2xl border border-border bg-card-bg p-8 transition-all duration-300 hover:scale-[1.02] hover:border-border hover:bg-card-hover hover:shadow-lg"
                  >
                    <div
                      className="h-16 w-16 rounded-2xl shadow-sm transition-shadow duration-300 group-hover:shadow-md"
                      style={{ backgroundColor: app.iconColor || "#d4a574" }}
                    />
                    <h3 className="mt-6 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {app.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {app.description}
                    </p>
                    <div className="mt-6 flex gap-3">
                      <AppStoreBadge url={app.appStoreUrl} />
                      <PlayStoreBadge url={app.playStoreUrl} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
