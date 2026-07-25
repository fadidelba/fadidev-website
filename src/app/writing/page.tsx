import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes from the workbench",
  description:
    "Development notes from building small iOS apps — bugs, dead ends, and small wins.",
};

// ponytail: a plain array beats a CMS until there are more notes than fit on one screen
const notes = [
  {
    slug: "knight-tour-solver-bug",
    date: "2026-07-21",
    app: "Knight Grid",
    title: "The solver bug that called solvable boards impossible",
    teaser:
      "A search cap is a timeout, not a proof — how I nearly shipped a solver that lied about which boards were solvable.",
  },
];

export default function WritingIndexPage() {
  return (
    <div className="px-6 pt-20 pb-24 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="rise rise-1 max-w-[18ch] font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-tight">
          Notes from the workbench
        </h1>
        <p className="rise rise-2 mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
          Things I learned building these apps — bugs, dead ends, small wins.
          Written down mostly so I stop relearning them.
        </p>

        <p className="prompt rise rise-3 mt-16">ls ./notes</p>
        <div className="rise rise-3 mt-4">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/writing/${note.slug}`}
              className="group block border-t border-border py-8"
            >
              <p className="spec-label text-faint">
                {note.date} · {note.app}
              </p>
              <h2 className="mt-2 max-w-[40ch] font-display text-xl font-bold tracking-tight underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current sm:text-2xl">
                {note.title}
              </h2>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted">
                {note.teaser}
              </p>
            </Link>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </div>
  );
}
