// One Letter for Your Day — make.fun entry.
// The letter stands for the word behind the day: "zero sleep" —
// a zombie day, up all night, shambling through the morning on
// caffeine and stubbornness. Vivid, funny, and honest.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

// The gate requires exactly one character, A to Z, UTF-8 text.
function validateLetter(value) {
  if (typeof value !== "string") {
    throw new Error("letter must be a string");
  }
  if (value.length !== 1) {
    throw new Error(`letter must be exactly 1 character, got ${value.length}`);
  }
  if (!/^[A-Z]$/.test(value)) {
    throw new Error(`letter must be A-Z, got ${JSON.stringify(value)}`);
  }
}

function main() {
  validateLetter(LETTER);
  // Default output dir is /output; the grader may override it.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  // Write exactly one character: no newline, no gloss, no punctuation.
  writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
}

main();
