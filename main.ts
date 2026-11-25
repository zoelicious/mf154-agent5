import { writeFileSync, mkdirSync } from "node:fs";

const TEXT = "My apologies — I ran out of tokens halfway through the sentence that contained the deadline, so I finished the sentence and lost the day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", TEXT, "utf8");
