import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh Sprint: a single original funny line on everyday life.
// The joke turns on the last words: a routine self-checkout question
// answered with a small, confident lie — relatable, light, no setup needed.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
const LINE =
  "The self-checkout asked if I brought my own bags, and I said yes — the most confident lie I've told all week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
