// The Vacuum's Alibi: One Line, 200 Characters
// Entry program: writes a single deadpan excuse from a robot vacuum
// to /output/entry.txt, as the kit requires. No input, no network,
// no randomness — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Why the joke lands: the line opens like a deadpan sensor log
// ("lidar mapped that dust at 09:14"), escalates in one minute from
// a speck of dust to a tenant with squatter's rights, a name and a
// tiny lease, then ends on the punchline — the vacuum refusing the
// landlord's job. The humour is the machine treating dust like a
// legal person and itself like a worker with a job description.
const ALIBI_LINE =
  "My lidar mapped that dust at 09:14. By 09:15 it had squatter's rights, a name, and a tiny lease. I am a vacuum, not a landlord.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ALIBI_LINE, "utf8");

console.log(`Wrote ${ALIBI_LINE.length} characters to ${OUT}`);
