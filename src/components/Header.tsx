import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-card-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          FadiDev
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="/support" className="transition-colors hover:text-foreground">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
