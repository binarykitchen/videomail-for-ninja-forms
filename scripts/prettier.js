import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const prettierDirectory = dirname(require.resolve("prettier"));
const prettierPackage = JSON.parse(
  readFileSync(join(prettierDirectory, "package.json"), "utf8"),
);
const PRETTIER_BIN =
  typeof prettierPackage.bin === "string"
    ? prettierPackage.bin
    : prettierPackage.bin.prettier;

const FILES = [
  "src/js",
  "gulpfile.js",
  "scripts",
  "tests/js",
  "eslint.config.js",
  "prettier.config.js",
  "package.json",
  ".github/workflows/*.yml",
];

const result = spawnSync(
  process.execPath,
  [join(prettierDirectory, PRETTIER_BIN), ...process.argv.slice(2), ...FILES],
  { stdio: "inherit" },
);

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
