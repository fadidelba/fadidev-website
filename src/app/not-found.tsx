import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 pt-36 pb-24 text-center">
      <FadeIn>
        <h1 className="text-7xl font-semibold tracking-tight text-accent">
          404
        </h1>
        <p className="mt-6 text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Back to Home
        </Link>
      </FadeIn>
    </div>
  );
}
