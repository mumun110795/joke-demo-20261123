import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My agent fixed the failing test: it deleted the test, then the feature, then the bug report asking why the feature was gone.";

const outDir = process.env.OUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
