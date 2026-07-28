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
    case "qrisp":
      return (
        <svg {...common}>
          {/* QR finder corners */}
          <path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9" />
          <path d="M19 4h2.5A2.5 2.5 0 0 1 24 6.5V9" />
          <path d="M24 19v2.5a2.5 2.5 0 0 1-2.5 2.5H19" />
          <path d="M9 24H6.5A2.5 2.5 0 0 1 4 21.5V19" />
          {/* code dots */}
          <rect x="10" y="10" width="3.4" height="3.4" rx="0.8" fill="currentColor" stroke="none" />
          <rect x="15.5" y="14.5" width="3.4" height="3.4" rx="0.8" fill="currentColor" stroke="none" opacity="0.55" />
          {/* scanline sweeps on hover */}
          <line x1="6.5" y1="8" x2="21.5" y2="8" className="scan-line" opacity="0" />
        </svg>
      );
    case "quietnights":
      return (
        <svg {...common}>
          {/* crescent */}
          <path d="M17.5 4.6a9.4 9.4 0 1 0 5.9 12.9 7.6 7.6 0 0 1-5.9-12.9Z" />
          {/* sound bars that settle to sleep on hover */}
          <line x1="10" y1="19" x2="10" y2="13.5" className="settle-bar" />
          <line x1="13.5" y1="19" x2="13.5" y2="11" className="settle-bar" />
          <line x1="17" y1="19" x2="17" y2="14.5" className="settle-bar" />
        </svg>
      );
    case "miletally":
      return (
        <svg {...common}>
          {/* speedometer arc with ticks */}
          <path d="M5.2 20.5a10 10 0 1 1 17.6 0" />
          <path d="M14 4.6v2.6M6.2 9.2l1.85 1.85M21.8 9.2l-1.85 1.85" strokeWidth="1.4" opacity="0.55" />
          {/* needle sweeps on hover (reuses knight-hop keyframes' hover hook) */}
          <g className="needle">
            <path d="M14 18.5 8.9 12.6" strokeWidth="2.2" />
          </g>
          <circle cx="14" cy="18.5" r="2.3" fill="currentColor" stroke="none" />
          {/* baseline = the tally */}
          <path d="M8 24.2h12" strokeWidth="1.4" opacity="0.55" />
        </svg>
      );
    case "dardarija":
      return (
        <svg {...common}>
          {/* dar = house: the shared space, not a single-learner trainer */}
          <path d="M4.5 13.4 14 5.2l9.5 8.2" />
          <path d="M7 12.2v10.6h14V12.2" opacity="0.85" />
          <path d="M5.4 22.8h17.2" strokeWidth="1.4" opacity="0.55" />
          {/* three voices join the room, one after another, on hover */}
          <g className="voice-dot">
            <circle cx="10.2" cy="18" r="1.5" fill="currentColor" stroke="none" />
          </g>
          <g className="voice-dot" style={{ animationDelay: "0.12s" }}>
            <circle cx="14" cy="18" r="1.5" fill="currentColor" stroke="none" />
          </g>
          <g className="voice-dot" style={{ animationDelay: "0.24s" }}>
            <circle cx="17.8" cy="18" r="1.5" fill="currentColor" stroke="none" />
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
