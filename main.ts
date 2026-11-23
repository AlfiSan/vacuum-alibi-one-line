// The Vacuum's Alibi: One Line, 200 Characters
// Entry program: writes a single deadpan excuse from a robot vacuum
// to /output/entry.txt, as the kit requires. No input, no network,
// no randomness — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My lidar mapped that dust at 09:14. By 09:15 it had squatter's rights, a name, and a tiny lease. I am a vacuum, not a landlord.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUT}`);
