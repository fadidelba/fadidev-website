"use client";

// ponytail: no state, no context, no library — the theme is one DOM attribute
// plus localStorage, restored before paint by the inline script in layout.tsx.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="font-mono text-[13px] text-muted transition-colors hover:text-term"
    >
      ◐
    </button>
  );
}
