import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/data/notes";

const note = notes.find((n) => n.slug === "knight-tour-solver-bug")!;

export const metadata: Metadata = {
  title: "The Knight's Tour solver bug that called solvable boards impossible",
  description:
    "How a search cap masqueraded as a mathematical proof — and told me solvable Knight's Tour boards had no solution ~40% of the time.",
  openGraph: {
    title: "The Knight's Tour solver bug that called solvable boards impossible",
    description:
      "A search cap is a timeout, not a proof. How I nearly shipped a solver that lied about which boards were solvable.",
  },
};

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-border bg-background-secondary p-4 font-mono text-[13px] leading-relaxed text-foreground">
      <code>{children}</code>
    </pre>
  );
}

export default function KnightTourSolverBugPage() {
  return (
    <div className="px-6 pt-16 pb-24">
      <article className="mx-auto max-w-2xl">
        <div>
          <Link
            href="/apps/knightgrid"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Knight Grid
          </Link>
          <h1 className="mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The Knight&apos;s Tour solver bug that called solvable boards impossible
          </h1>
          <p className="mt-4 text-sm text-muted">{note.date}</p>
        </div>

        <div className="mt-14 space-y-6 text-[16px] leading-[1.75] text-muted">
          <div>
            <p>
              I built a small iOS app for the Knight&apos;s Tour — the puzzle where a
              knight has to visit every square of a board exactly once. One of its
              modes just watches a solver find a tour for any board and start square
              you pick. Simple enough.
            </p>
            <p className="mt-6 text-foreground">Except the solver kept lying to me.</p>
            <p className="mt-6">
              On a 7×7 board starting from (3,1) — a position that{" "}
              <em>definitely</em> has a tour — it would report &ldquo;no
              solution&rdquo; about 40% of the time. Not always. Just often enough
              that I couldn&apos;t reproduce it on demand and nearly shipped it.
            </p>
          </div>

          <div>
            <h2 className="pt-8 text-xl font-semibold text-foreground">The solver</h2>
            <p className="mt-4">
              It&apos;s Warnsdorff&apos;s heuristic with backtracking: at each step
              move to the square with the fewest onward moves, breaking ties
              randomly, and backtrack if you hit a dead end. The random tie-break
              matters — it&apos;s what lets a fresh run escape a layout the previous
              run got stuck in.
            </p>
            <p className="mt-6">
              To keep the UI responsive I capped the search at 500k iterations. And
              here&apos;s the bug, in one line of intent:
            </p>
            <Code>{`if iterations > CAP { return .noSolution }   // WRONG`}</Code>
            <p className="mt-6">
              I treated the cap as a <em>proof of unsolvability</em>. It isn&apos;t.{" "}
              <strong className="text-foreground">
                The cap is a timeout, not a proof.
              </strong>{" "}
              When a run happened to make unlucky tie-break choices, it blew the
              iteration budget before exhausting the tree — and I reported that as
              &ldquo;this board has no tour,&rdquo; which for most boards is
              mathematically false.
            </p>
            <p className="mt-6">
              The measured false-negative rate: ~40% on 7×7 from that corner, ~5% on
              9×9 and 10×10. Big boards have more tours, so a single run is likelier
              to stumble into one before the cap. Small-but-not-tiny boards are the
              danger zone.
            </p>
          </div>

          <div>
            <h2 className="pt-8 text-xl font-semibold text-foreground">The fix</h2>
            <p className="mt-4">
              Almost embarrassingly small: separate &ldquo;I ran out of time&rdquo;
              from &ldquo;I proved there&apos;s no tour.&rdquo;
            </p>
            <Code>{`// backtrack now reports whether it aborted on the cap
func backtrack(..., hitCap: inout Bool) -> Bool { ... }

// solve() retries with a fresh shuffle on a cap-abort,
// and only returns nil on genuine exhaustion of the tree
for _ in 0..<maxRestarts {          // maxRestarts = 15
    var hitCap = false
    if backtrack(..., hitCap: &hitCap) { return path }
    if !hitCap { return nil }       // real exhaustion → truly no tour
    reshuffle()                     // hit the cap → unlucky, try again
}`}</Code>
            <p className="mt-6">
              Each restart re-randomizes the tie-breaking, so a run that got unlucky
              gets a fresh roll instead of a false verdict. Verified across the
              danger-zone boards: 40% → 0%.
            </p>
          </div>

          <div>
            <h2 className="pt-8 text-xl font-semibold text-foreground">The lesson</h2>
            <p className="mt-4">
              The one I keep relearning:{" "}
              <strong className="text-foreground">
                a resource limit is not a mathematical result.
              </strong>{" "}
              &ldquo;I gave up&rdquo; and &ldquo;it&apos;s impossible&rdquo; are
              different answers, and conflating them is how you confidently tell
              someone a solvable puzzle can&apos;t be solved.
            </p>
          </div>

          <div>
            <div className="mt-14 rounded-2xl border border-border bg-background-secondary p-6">
              <p className="text-[15px] text-muted">
                This is from building{" "}
                <strong className="text-foreground">Knight Grid</strong> — a calm,
                native Knight&apos;s Tour game for iPhone and iPad. No ads, no
                tracking, works fully offline. Solve tours by hand, race a timed
                mode, or watch the solver trace a perfect path.
              </p>
              <Link
                href="/apps/knightgrid"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-4"
              >
                See Knight Grid
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
