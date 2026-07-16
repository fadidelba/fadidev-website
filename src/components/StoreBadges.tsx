/* One honest button instead of imitation store badges. */
export function AppStoreButton({
  url,
  size = "md",
}: {
  url?: string;
  size?: "md" | "lg";
}) {
  if (!url) return null;
  const pad = size === "lg" ? "px-6 py-3.5 text-[15px]" : "px-5 py-2.5 text-sm";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full bg-foreground font-medium text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] ${pad}`}
    >
      <svg width="15" height="18" viewBox="0 0 15 18" fill="currentColor" aria-hidden>
        <path d="M12.52 9.56c.02 2.5 2.19 3.33 2.21 3.34-.02.06-.35 1.19-1.14 2.36-.69 1.01-1.4 2.01-2.53 2.03-1.1.02-1.46-.65-2.72-.65s-1.66.63-2.7.67c-1.09.04-1.91-1.09-2.61-2.1C1.61 13.15.52 9.4 1.98 6.86A4.06 4.06 0 0 1 5.4 4.78c1.06-.02 2.07.72 2.72.72.65 0 1.87-.89 3.15-.76.54.02 2.05.22 3.02 1.63-.08.05-1.8 1.05-1.77 3.19ZM10.43 2.9C11 2.2 11.39 1.24 11.28.28c-.83.03-1.83.55-2.42 1.24-.53.62-.99 1.6-.87 2.54.92.07 1.87-.47 2.44-1.16Z" />
      </svg>
      Download on the App Store
    </a>
  );
}

export function InDevelopmentTag() {
  return (
    <span className="spec-label inline-flex items-center gap-2 text-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full border border-current" />
      </span>
      In development
    </span>
  );
}
