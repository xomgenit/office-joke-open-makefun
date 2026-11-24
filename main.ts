import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I asked the meeting if it could have been an email; it scheduled a follow-up to discuss my tone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// Gate: single line, 1–200 characters, not only whitespace.
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error(`entry fails gate: ${entry.length} characters`);
}
