import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(
  readFileSync(path.join(projectRoot, "package.json"), "utf8"),
);
const version = packageJson.version;
const checkOnly = process.argv.includes("--check");

if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version)) {
  throw new Error(`Invalid package version: ${version}`);
}

const targets = [
  {
    file: "readme.txt",
    pattern: /^Stable tag: .*$/m,
    replacement: `Stable tag: ${version}`,
  },
  {
    file: "videomail-for-ninja-forms.php",
    pattern: /^(\s*Version:) .*$/m,
    replacement: `$1 ${version}`,
  },
  {
    file: "src/php/videomail.php",
    pattern: /const VERSION = '[^']+';/,
    replacement: `const VERSION = '${version}';`,
  },
  {
    file: "src/js/main.js",
    pattern: /const PLUGIN_VERSION = "[^"]+";/,
    replacement: `const PLUGIN_VERSION = "${version}";`,
  },
];

const outOfSync = [];

for (const target of targets) {
  const filePath = path.join(projectRoot, target.file);
  const contents = readFileSync(filePath, "utf8");

  if (!target.pattern.test(contents)) {
    throw new Error(`Could not find the version marker in ${target.file}`);
  }

  const updatedContents = contents.replace(target.pattern, target.replacement);

  if (updatedContents === contents) continue;

  outOfSync.push(target.file);

  if (!checkOnly) {
    writeFileSync(filePath, updatedContents);
  }
}

if (checkOnly && outOfSync.length > 0) {
  console.error(`Version ${version} is not synchronized in: ${outOfSync.join(", ")}`);
  process.exitCode = 1;
} else if (checkOnly) {
  console.log(`Version ${version} is synchronized.`);
} else {
  console.log(`Synchronized version ${version} in ${targets.length} files.`);
}
