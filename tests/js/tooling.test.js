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

for (const exitCode of [0, 1]) {
  test(`npm release only starts after quality succeeds (exit=${exitCode})`, (t) => {
    const directory = fixture(t);
    mkdirSync(path.join(directory, "env/dev"), { recursive: true });
    writeFileSync(
      path.join(directory, "env/dev/release.sh"),
      "#!/bin/sh\nprintf started > release-started\n",
      { mode: 0o755 },
    );
    writeFileSync(
      path.join(directory, "package.json"),
      JSON.stringify({
        scripts: {
          quality: `node -e "process.exit(${exitCode})"`,
          release: manifest.scripts.release,
        },
      }),
    );
    const result = spawnSync("npm", ["run", "release"], {
      cwd: directory,
      encoding: "utf8",
    });
    assert.equal(result.status, exitCode, result.stderr);
    if (exitCode === 0)
      assert.equal(
        readFileSync(path.join(directory, "release-started"), "utf8"),
        "started",
      );
    else
      assert.throws(() => readFileSync(path.join(directory, "release-started")), {
        code: "ENOENT",
      });
  });
}

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
