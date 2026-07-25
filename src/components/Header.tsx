import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-bg backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="cursor font-mono text-sm font-semibold tracking-[0.08em] transition-opacity hover:opacity-70"
        >
          FADIDEV
        </Link>
        <nav className="flex items-center gap-7 font-mono text-[13px]">
          <Link href="/#apps" className="text-muted transition-colors hover:text-term">
            apps
          </Link>
          <Link href="/writing" className="text-muted transition-colors hover:text-term">
            notes
          </Link>
          <Link href="/support" className="text-muted transition-colors hover:text-term">
            support
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
