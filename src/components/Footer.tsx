import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-sm font-medium text-foreground">FadiDev</div>
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-muted transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="text-muted transition-colors hover:text-foreground"
            >
              Support
            </Link>
            <a
              href="mailto:support@fadidev.app"
              className="text-muted transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-12 text-center text-xs text-muted/60">
          &copy; {new Date().getFullYear()} FadiDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
