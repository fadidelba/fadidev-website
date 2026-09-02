/*
 * Hand-drawn marks for each app, one per slug, on a shared 28×28 grid.
 * Each mark has a small hover behaviour (driven by .group in globals.css):
 * the knight hops an L, the scanner sweeps, the sound bars fall asleep,
 * the road rolls. Color comes from currentColor so each app world tints it.
 */
export default function AppGlyph({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (slug) {
    case "knightgrid":
      return (
        <svg {...common}>
          {/* 3×3 board */}
          <path d="M4 11.33h20M4 18.66h20M11.33 4v20M18.66 4v20" strokeWidth="1" opacity="0.28" />
          <rect x="4" y="4" width="20" height="20" rx="2.5" strokeWidth="1.2" opacity="0.55" />
          {/* the knight's L: start square, path over-over-up, landing dot */}
          <rect x="5.9" y="20.1" width="3.6" height="1.9" rx="0.95" fill="currentColor" stroke="none" opacity="0.45" />
          <path d="M7.7 21v-2.6c0-1 .8-1.8 1.8-1.8h9c1 0 1.8-.8 1.8-1.8V12" opacity="0.6" strokeDasharray="0.1 3.1" />
          <g className="knight-piece">
            <circle cx="20.3" cy="8.1" r="2.6" fill="currentColor" stroke="none" />
          </g>
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="5" y="5" width="18" height="18" rx="4.5" />
        </svg>
      );
  }
}
