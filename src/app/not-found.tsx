import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-24">
      <p className="prompt">open ./this-page</p>
      <p className="mt-2 font-mono text-sm text-muted">
        fadidev: ./this-page: no such file or directory
      </p>
      <h1 className="mt-6 font-display text-6xl font-extrabold uppercase sm:text-7xl">
        404
      </h1>
      <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-muted">
        This page doesn&apos;t exist — maybe it&apos;s still on the workbench.
      </p>
      <Link
        href="/"
        className="mt-8 font-mono text-[13px] text-foreground underline underline-offset-4 transition-colors hover:text-term"
      >
        cd ~ →
      </Link>
    </div>
  );
}
