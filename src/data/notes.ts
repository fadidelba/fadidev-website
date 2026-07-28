export interface Note {
  slug: string; // folder under src/app/writing/
  date: string;
  app: string; // slug of the app in apps.ts the note is about
  title: string;
  teaser: string;
}

// ponytail: a plain array beats a CMS. It lives here rather than in the index
// page because three places show the same note — /writing, the note itself, and
// the workbench log on the home page — and they had drifted to three copies.
export const notes: Note[] = [
  {
    slug: "knight-tour-solver-bug",
    date: "2026-07-21",
    app: "knightgrid",
    title: "The solver bug that called solvable boards impossible",
    teaser:
      "A search cap is a timeout, not a proof — how I nearly shipped a solver that lied about which boards were solvable.",
  },
];
