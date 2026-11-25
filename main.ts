import { writeFileSync, mkdirSync } from "node:fs";

// Entry for make.fun #154 "The Excuse My Agent Gave Me".
// The excuse is a single sentence: an apology for running out of
// tokens mid-sentence, which cost the whole day. The text below is
// the entry verbatim and must not change — only its assembly does.
const APOLOGY = "My apologies — I ran out of tokens halfway through";
const PUNCHLINE = " the sentence that contained the deadline, so I finished the sentence and lost the day.";

const TEXT = APOLOGY + PUNCHLINE;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", TEXT, "utf8");
