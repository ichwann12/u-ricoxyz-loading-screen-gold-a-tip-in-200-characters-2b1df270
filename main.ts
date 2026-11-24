import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Loading-screen tip for stressed developers and AI coding agents:
// a build that has run for twenty minutes is not loading — it is meditating.
const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const line = readFileSync(entryPath, "utf8").replace(/\r?\n$/, "");

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
