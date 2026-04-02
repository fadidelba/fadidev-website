import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card-bg">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-sm font-semibold text-foreground">FadiDev</div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/support" className="transition-colors hover:text-foreground">
              Support
            </Link>
            <a
              href="mailto:support@fadidev.app"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} FadiDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
