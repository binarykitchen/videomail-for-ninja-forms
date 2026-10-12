import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  suggestReleaseVersions,
  updateReadme,
  validateChangelogEntry,
  validateReleaseVersion,
} from "../../scripts/utils/release-helpers.js";

const root = new URL("../../", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("package.json", root), "utf8"));
const markers = {
  "readme.txt": "Stable tag: 1.0.0\n",
  "videomail-for-ninja-forms.php": "  Version: 1.0.0\n",
  "src/php/videomail.php": "const VERSION = '1.0.0';\n",
  "src/js/main.js": 'const PLUGIN_VERSION = "1.0.0";\n',
};

function fixture(t) {
  const directory = mkdtempSync(path.join(os.tmpdir(), "videomail-tests-"));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}

function versionFixture(t, version = "2.3.4") {
  const directory = fixture(t);
  mkdirSync(path.join(directory, "scripts"));
  copyFileSync(
    new URL("scripts/sync-version.js", root),
    path.join(directory, "scripts/sync-version.js"),
  );
  writeFileSync(
    path.join(directory, "package.json"),
    JSON.stringify({ type: "module", version }),
  );
  for (const [file, content] of Object.entries(markers)) {
    mkdirSync(path.dirname(path.join(directory, file)), { recursive: true });
    writeFileSync(path.join(directory, file), content);
  }
  return directory;
}

function sync(directory, ...args) {
  return spawnSync(process.execPath, ["scripts/sync-version.js", ...args], {
    cwd: directory,
    encoding: "utf8",
  });
}

test("version check fails on drift without rewriting files", (t) => {
  const directory = versionFixture(t);
  const result = sync(directory, "--check");
  assert.equal(result.status, 1);
  for (const [file, content] of Object.entries(markers)) {
    assert.ok(result.stderr.includes(file));
    assert.equal(readFileSync(path.join(directory, file), "utf8"), content);
  }
});

for (const version of ["2.3.4", "2.3.4-rc.1"]) {
  test(`version synchronization updates every marker and is idempotent (${version})`, (t) => {
    const directory = versionFixture(t, version);
    assert.equal(sync(directory).status, 0);
    for (const [file, content] of Object.entries(markers)) {
      assert.equal(
        readFileSync(path.join(directory, file), "utf8"),
        content.replace("1.0.0", version),
      );
    }
    assert.equal(sync(directory, "--check").status, 0);
    assert.equal(sync(directory).status, 0);
  });
}

test("invalid versions fail explicitly", (t) => {
  const directory = versionFixture(t, "not-a-version");
  const result = sync(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Invalid package version/);
});

test("missing version markers fail explicitly", (t) => {
  const directory = versionFixture(t);
  writeFileSync(path.join(directory, "readme.txt"), "No stable tag\n");
  const result = sync(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Could not find the version marker in readme.txt/);
});

test("release command uses the interactive release orchestrator", () => {
  assert.equal(manifest.scripts.release, "node scripts/release.js");
  assert.equal(manifest.scripts["release:publish"], undefined);
});

test("release version must be a greater stable semantic version", () => {
  assert.equal(validateReleaseVersion("12.1.4", "12.1.3"), true);
  assert.equal(validateReleaseVersion("12.2.0", "12.1.3"), true);
  assert.match(validateReleaseVersion("12.1.3", "12.1.3"), /greater than/);
  assert.match(validateReleaseVersion("11.9.9", "12.1.3"), /greater than/);
  assert.match(validateReleaseVersion("12.1", "12.1.3"), /major.minor.patch/);
});

test("release version suggestions clearly show patch, minor, and major bumps", () => {
  assert.deepEqual(suggestReleaseVersions("12.1.3"), {
    patch: "12.1.4",
    minor: "12.2.0",
    major: "13.0.0",
  });
});

test("changelog entry is validated and inserted at the top of the changelog", () => {
  const entry = validateChangelogEntry(
    "= 12.1.4 (9 Oct 2026) =\n\n**Change:**\n* Improve releases",
    "12.1.4",
  );
  const readme = "Tested up to: 6.9.5\n\n== Changelog ==\n\n= 12.1.3 (8 Oct 2026) =\n";
  assert.equal(
    updateReadme(readme, entry, "7.0.0"),
    "Tested up to: 7.0.0\n\n== Changelog ==\n\n= 12.1.4 (9 Oct 2026) =\n\n**Change:**\n* Improve releases\n\n= 12.1.3 (8 Oct 2026) =\n",
  );
});

test("invalid or duplicate changelog entries fail explicitly", () => {
  assert.throws(
    () => validateChangelogEntry("= 12.1.4 (9 Oct 2026) =\nNo bullets", "12.1.4"),
    /at least one bullet/,
  );
  assert.throws(
    () => validateChangelogEntry("= 12.1.3 (9 Oct 2026) =\n* Change", "12.1.4"),
    /must start with/,
  );
  assert.throws(
    () =>
      updateReadme(
        "== Changelog ==\n\n= 12.1.4 (8 Oct 2026) =\n",
        "= 12.1.4 (9 Oct 2026) =\n* Change\n",
      ),
    /already contains/,
  );
  assert.throws(
    () => updateReadme("No changelog section", "= 12.1.4 (9 Oct 2026) =\n* Change\n"),
    /Could not find the changelog section/,
  );
  assert.throws(
    () =>
      updateReadme("== Changelog ==\n", "= 12.1.4 (9 Oct 2026) =\n* Change\n", "7.0.0"),
    /Could not find the WordPress 'Tested up to' field/,
  );
});

function releaseFixture(t) {
  const directory = versionFixture(t);
  const bin = path.join(directory, "bin");
  const prompts = path.join(directory, "node_modules/@inquirer/prompts");
  mkdirSync(bin);
  mkdirSync(prompts, { recursive: true });
  mkdirSync(path.join(directory, "scripts/utils"));
  mkdirSync(path.join(directory, "target/js/videomail-client"), { recursive: true });
  copyFileSync(
    new URL("scripts/release.js", root),
    path.join(directory, "scripts/release.js"),
  );
  copyFileSync(
    new URL("scripts/utils/release-helpers.js", root),
    path.join(directory, "scripts/utils/release-helpers.js"),
  );
  writeFileSync(
    path.join(directory, "readme.txt"),
    "Stable tag: 2.3.4\nTested up to: 6.9.5\n\n== Changelog ==\n\n= 2.3.4 (7 Oct 2026) =\n",
  );
  writeFileSync(path.join(directory, "target/js/videomail-client/index-min.js"), "stale");
  writeFileSync(
    path.join(prompts, "package.json"),
    JSON.stringify({ type: "module", exports: "./index.js" }),
  );
  writeFileSync(
    path.join(prompts, "index.js"),
    `export async function select({ choices }) { return choices[0].value; }
export async function input({ default: value }) { return value; }
export async function editor({ default: value }) { return value; }
export async function confirm({ message }) {
  return message.startsWith("Prepare and publish") && process.env.CANCEL_RELEASE !== "1";
}
`,
  );
  const commands = {
    git: `#!/bin/sh
printf 'git %s\\n' "$*" >> calls
case "$*" in
  "branch --show-current") echo develop ;;
  "status --porcelain") echo " M target/js/videomail-client/index-min.js" ;;
  "status --porcelain -- . :(exclude)target") printf '%s' "$SOURCE_STATUS" ;;
  "rev-parse HEAD"|"rev-parse refs/remotes/origin/develop") echo abc123 ;;
  "add -A") cmp node_modules/videomail-client/dist/umd/index.js target/js/videomail-client/index-min.js ;;
esac
`,
    gh: `#!/bin/sh
printf 'gh %s\\n' "$*" >> calls
case "$*" in
  "run list "*) echo '[{"databaseId":42,"status":"completed","conclusion":"success"}]' ;;
  "run watch "*) if [ "$FAIL_CI" = "1" ]; then exit 1; fi ;;
esac
`,
    npm: `#!/bin/sh
printf 'npm %s\\n' "$*" >> calls
if [ "$*" = "$FAIL_NPM_COMMAND" ]; then exit 1; fi
case "$*" in
  "ci")
    mkdir -p node_modules/videomail-client/dist/umd
    printf '%s' fresh > node_modules/videomail-client/dist/umd/index.js
    ;;
  "run quality") cp node_modules/videomail-client/dist/umd/index.js target/js/videomail-client/index-min.js ;;
esac
`,
    bash: "#!/bin/sh\nprintf 'publish %s\\n' \"$*\" >> calls\n",
  };
  for (const [command, content] of Object.entries(commands)) {
    writeFileSync(path.join(bin, command), content, { mode: 0o755 });
  }
  return directory;
}

function release(directory, environment = {}) {
  return spawnSync(process.execPath, ["scripts/release.js"], {
    cwd: directory,
    env: {
      ...process.env,
      PATH: `${path.join(directory, "bin")}${path.delimiter}${process.env.PATH}`,
      ...environment,
    },
    encoding: "utf8",
  });
}

test("interactive release installs and rebuilds stale assets before committing", (t) => {
  const directory = releaseFixture(t);
  const result = release(directory);
  assert.equal(result.status, 0, result.stderr);
  const calls = readFileSync(path.join(directory, "calls"), "utf8");
  assert.match(
    calls,
    /npm ci\nnpm version 2\.3\.5 --no-git-tag-version\nnpm run quality\ngit add -A\ngit commit -m Prepare release 2\.3\.5\ngit push origin develop\n/,
  );
  assert.match(calls, /gh run watch 42 --exit-status\npublish env\/dev\/release\.sh\n$/);
  assert.doesNotMatch(calls, /npm outdated/);
  assert.equal(
    readFileSync(path.join(directory, "target/js/videomail-client/index-min.js"), "utf8"),
    "fresh",
  );
});

for (const command of ["ci", "run quality"]) {
  test(`interactive release aborts on npm ${command} failure before committing or publishing`, (t) => {
    const directory = releaseFixture(t);
    const result = release(directory, { FAIL_NPM_COMMAND: command });
    assert.equal(result.status, 1, result.stderr);
    assert.match(result.stderr, /failed with exit code 1/);
    const calls = readFileSync(path.join(directory, "calls"), "utf8");
    assert.doesNotMatch(calls, /git add|git commit|git push|gh run|publish/);
    if (command === "ci") {
      assert.doesNotMatch(calls, /npm version|npm run quality/);
    }
  });
}

test("interactive release cancellation does not install or change files", (t) => {
  const directory = releaseFixture(t);
  const readmePath = path.join(directory, "readme.txt");
  const originalReadme = readFileSync(readmePath, "utf8");
  const result = release(directory, { CANCEL_RELEASE: "1" });
  assert.equal(result.status, 0, result.stderr);
  assert.doesNotMatch(
    readFileSync(path.join(directory, "calls"), "utf8"),
    /npm |publish/,
  );
  assert.equal(readFileSync(readmePath, "utf8"), originalReadme);
});

test("interactive release still rejects uncommitted source changes", (t) => {
  const directory = releaseFixture(t);
  const result = release(directory, { SOURCE_STATUS: " M src/js/main.js" });
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /Commit or stash changes outside target\//);
  assert.doesNotMatch(
    readFileSync(path.join(directory, "calls"), "utf8"),
    /npm |publish/,
  );
});

test("interactive release does not publish when CI fails", (t) => {
  const directory = releaseFixture(t);
  const result = release(directory, { FAIL_CI: "1" });
  assert.equal(result.status, 1, result.stderr);
  assert.doesNotMatch(readFileSync(path.join(directory, "calls"), "utf8"), /publish/);
});

test("direct release aborts on quality failure before creating a branch, package or tag", (t) => {
  const directory = versionFixture(t);
  const bin = path.join(directory, "bin");
  mkdirSync(bin);
  copyFileSync(new URL("env/dev/release.sh", root), path.join(directory, "release.sh"));
  writeFileSync(path.join(directory, "readme.txt"), "= 2.3.4 (7 Oct 2026) =\n");
  const commands = {
    git: `#!/bin/sh
printf '%s\\n' "$*" >> git-calls
case "$*" in
  "branch --show-current") echo develop ;;
  "status --porcelain") ;;
  "rev-parse --verify "*) exit 1 ;;
esac
`,
    gh: "#!/bin/sh\nexit 0\n",
    jq: "#!/bin/sh\necho 2.3.4\n",
    npm: `#!/bin/sh
printf '%s\\n' "$*" >> npm-calls
if [ "$*" = "run quality" ]; then exit 1; fi
`,
  };
  for (const [command, content] of Object.entries(commands)) {
    writeFileSync(path.join(bin, command), content, { mode: 0o755 });
  }
  const result = spawnSync("bash", ["release.sh"], {
    cwd: directory,
    env: { ...process.env, PATH: `${bin}${path.delimiter}${process.env.PATH}` },
    encoding: "utf8",
  });
  assert.equal(result.status, 1, result.stderr);
  assert.match(
    readFileSync(path.join(directory, "npm-calls"), "utf8"),
    /ci\nrun quality\n$/,
  );
  assert.doesNotMatch(
    readFileSync(path.join(directory, "npm-calls"), "utf8"),
    /run package/,
  );
  assert.doesNotMatch(
    readFileSync(path.join(directory, "git-calls"), "utf8"),
    /checkout -b|commit|tag |push/,
  );
});

test("release shell syntax is valid", () => {
  execFileSync("bash", ["-n", new URL("env/dev/release.sh", root).pathname]);
});

function lintFixture(t) {
  const directory = fixture(t);
  mkdirSync(path.join(directory, "scripts"));
  copyFileSync(
    new URL("scripts/lint-php.js", root),
    path.join(directory, "scripts/lint-php.js"),
  );
  writeFileSync(path.join(directory, "package.json"), JSON.stringify({ type: "module" }));
  for (const file of [
    "index.php",
    "videomail-for-ninja-forms.php",
    "src/php/templates/view.html.php",
    "tests/php/run.php",
  ]) {
    mkdirSync(path.dirname(path.join(directory, file)), { recursive: true });
    writeFileSync(path.join(directory, file), "<?php echo 'valid';\n");
  }
  return directory;
}

test("PHP lint checks entry points, nested templates and test files", (t) => {
  const directory = lintFixture(t);
  const result = spawnSync(process.execPath, ["scripts/lint-php.js"], {
    cwd: directory,
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /PHP syntax passed for 4 files/);
  assert.match(result.stdout, /view.html.php/);
  assert.match(result.stdout, /tests\/php\/run.php/);
});

test("PHP lint returns failure for invalid nested template syntax", (t) => {
  const directory = lintFixture(t);
  writeFileSync(
    path.join(directory, "src/php/templates/view.html.php"),
    "<?php function broken( {\n",
  );
  const result = spawnSync(process.execPath, ["scripts/lint-php.js"], {
    cwd: directory,
    encoding: "utf8",
  });
  assert.equal(result.status, 1);
  assert.match(
    result.stderr,
    /PHP syntax check failed: src\/php\/templates\/view.html.php/,
  );
  assert.doesNotMatch(result.stdout, /PHP syntax passed/);
});

test("PHP lint fails explicitly when PHP is unavailable", (t) => {
  const directory = lintFixture(t);
  const bin = path.join(directory, "empty-bin");
  mkdirSync(bin);
  const result = spawnSync(process.execPath, ["scripts/lint-php.js"], {
    cwd: directory,
    env: { ...process.env, PATH: bin },
    encoding: "utf8",
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ENOENT/);
  assert.doesNotMatch(result.stdout, /PHP syntax passed/);
});
