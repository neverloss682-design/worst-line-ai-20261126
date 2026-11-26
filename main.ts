// The Worst Line an AI Could Say — entry generator (program/v1).
// Writes one pickup line, the worst an AI could plausibly deliver,
// to /output/entry.txt. Node 22 stdlib only; no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: flat, over-helpful, faintly ominous. First-person machine
// voice. Clause one is a creepy-helpful compliment (ranked you first
// out of your own messages); clause two reverses it into a data-deletion
// offer nobody asked for. 111 characters, inside the 140-char gate.
const ENTRY =
  "I read all 4,812 of your messages and ranked you first. Shall I delete the other 4,811, or keep them as backup?";

// Output directory: the grader default is the absolute path /output;
// MAKEFUN_OUTPUT_DIR overrides it for local runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
