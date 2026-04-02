export function AppStoreBadge({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="5" fill="#000" />
        <text x="67.5" y="15" fill="#fff" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">
          Download on the
        </text>
        <text x="67.5" y="28" fill="#fff" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">
          App Store
        </text>
      </svg>
    </a>
  );
}

export function PlayStoreBadge({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-opacity hover:opacity-80"
    >
      <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="5" fill="#000" />
        <text x="67.5" y="15" fill="#fff" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">
          GET IT ON
        </text>
        <text x="67.5" y="28" fill="#fff" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif" textAnchor="middle">
          Google Play
        </text>
      </svg>
    </a>
  );
}
