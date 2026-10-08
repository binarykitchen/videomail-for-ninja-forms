import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { copyFileSync, cpSync, mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";

const root = new URL("../../", import.meta.url);

for (const scenario of ["current", "missing", "old", "deprecated"]) {
  test(`plugin entry point and autoloading with Ninja Forms: ${scenario}`, (t) => {
    const directory = mkdtempSync(path.join(os.tmpdir(), "videomail-startup-"));
    t.after(() => rmSync(directory, { recursive: true, force: true }));
    copyFileSync(
      new URL("videomail-for-ninja-forms.php", root),
      path.join(directory, "videomail-for-ninja-forms.php"),
    );
    cpSync(new URL("src/php", root), path.join(directory, "target/php"), {
      recursive: true,
    });
    const result = spawnSync(
      "php",
      [new URL("tests/php/startup.php", root).pathname, directory, scenario],
      { encoding: "utf8" },
    );
    assert.ifError(result.error);
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
    assert.match(result.stdout, /^PASS /);
  });
}
