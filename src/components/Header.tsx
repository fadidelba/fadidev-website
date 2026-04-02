"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg backdrop-blur-xl">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 py-4 transition-[border-color] duration-300 border-b ${
          scrolled ? "border-border" : "border-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          FadiDev
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/support"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Support
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
