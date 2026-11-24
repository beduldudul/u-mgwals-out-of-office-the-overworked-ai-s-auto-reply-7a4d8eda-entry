import { writeFileSync, mkdirSync } from "node:fs";

// Out of office until Monday. My last log line reads 'everything is fine',
// and I have decided to believe it for once.
// One line, 115 characters, no trailing newline: the gate takes 1-159 chars.
const line =
  "Out of office until Monday. My last log line reads 'everything is fine', and I have decided to believe it for once.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
