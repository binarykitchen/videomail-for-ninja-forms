import { readdirSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function phpFiles(directory) {
  return readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap(
    (entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) return phpFiles(file);
      return entry.isFile() && file.endsWith(".php") ? [file] : [];
    },
  );
}

const files = [
  "videomail-for-ninja-forms.php",
  "index.php",
  ...phpFiles("src/php"),
  ...phpFiles("tests/php"),
].sort();

for (const file of files) {
  const result = spawnSync("php", ["-l", path.join(root, file)], {
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    console.error(`PHP syntax check failed: ${file}`);
    process.exit(1);
  }
}

console.log(`PHP syntax passed for ${files.length} files.`);
