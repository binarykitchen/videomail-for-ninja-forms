import { spawnSync, execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { confirm, editor, input, select } from "@inquirer/prompts";
import {
  suggestReleaseVersions,
  updateReadme,
  validateChangelogEntry,
  validateReleaseVersion,
} from "./utils/release-helpers.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function output(command, args) {
  try {
    return execFileSync(command, args, {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch (error) {
    const details = error.stderr?.toString().trim();
    throw new Error(
      `${command} ${args.join(" ")} failed${details ? `: ${details}` : "."}`,
      { cause: error },
    );
  }
}

function run(command, args) {
  const result = spawnSync(command, args, { cwd: projectRoot, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(
      `${command} ${args.join(" ")} failed with exit code ${result.status}.`,
    );
  }
}

function checkPreconditions() {
  if (output("git", ["branch", "--show-current"]) !== "develop") {
    throw new Error("Releases must start on the develop branch.");
  }
  if (output("git", ["status", "--porcelain"])) {
    throw new Error("Commit or stash all changes before starting a release.");
  }
  output("gh", ["auth", "status"]);
  run("git", ["fetch", "origin", "--prune"]);

  for (const branch of ["develop", "master"]) {
    output("git", ["show-ref", "--verify", `refs/remotes/origin/${branch}`]);
  }

  const localHead = output("git", ["rev-parse", "HEAD"]);
  const remoteHead = output("git", ["rev-parse", "refs/remotes/origin/develop"]);
  if (localHead !== remoteHead) {
    throw new Error("Local develop must match origin/develop before starting a release.");
  }
}

function checkReleaseAvailable(version) {
  if (output("git", ["tag", "--list", version])) {
    throw new Error(`Release tag '${version}' already exists.`);
  }
  if (output("git", ["branch", "--list", `release/${version}`])) {
    throw new Error(`Release branch 'release/${version}' already exists.`);
  }
  if (output("git", ["branch", "--remotes", "--list", `origin/release/${version}`])) {
    throw new Error(`Remote release branch 'origin/release/${version}' already exists.`);
  }
}

function showOutdatedDependencies() {
  console.log(
    "\n🔎 Checking for outdated dependencies (npm outdated may exit 1 when updates exist):",
  );
  const result = spawnSync("npm", ["outdated"], {
    cwd: projectRoot,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0 && result.status !== 1) {
    throw new Error(`npm outdated failed with exit code ${result.status}.`);
  }
}

async function waitForTestRunner(commit) {
  console.log(`\n⏳ Waiting for the Test Runner workflow on ${commit}...`);
  let workflow;

  for (let attempt = 0; attempt < 30; attempt += 1) {
    const runs = JSON.parse(
      output("gh", [
        "run",
        "list",
        "--commit",
        commit,
        "--workflow",
        "push.yml",
        "--json",
        "databaseId,status,conclusion",
        "--limit",
        "1",
      ]),
    );
    workflow = runs[0];
    if (workflow) break;
    await sleep(10_000);
  }

  if (!workflow) {
    throw new Error("No Test Runner workflow appeared within five minutes.");
  }

  run("gh", ["run", "watch", String(workflow.databaseId), "--exit-status"]);
}

async function main() {
  checkPreconditions();

  const packageJson = JSON.parse(
    readFileSync(path.join(projectRoot, "package.json"), "utf8"),
  );
  const readmePath = path.join(projectRoot, "readme.txt");
  const readme = readFileSync(readmePath, "utf8");

  showOutdatedDependencies();
  if (
    !(await confirm({
      message: "Have you reviewed the dependency updates and applied any you want?",
      default: false,
    }))
  ) {
    console.log("⚠️ Release cancelled without changing files.");
    return;
  }

  const suggestions = suggestReleaseVersions(packageJson.version);
  const selectedVersion = await select({
    message: `Current version is ${packageJson.version}. Which version would you like to release?`,
    choices: [
      {
        name: `Patch: ${suggestions.patch} — bug fixes (recommended)`,
        value: suggestions.patch,
      },
      {
        name: `Minor: ${suggestions.minor} — backwards-compatible features`,
        value: suggestions.minor,
      },
      {
        name: `Major: ${suggestions.major} — breaking changes`,
        value: suggestions.major,
      },
      { name: "Enter a version manually", value: "manual" },
    ],
  });
  const version =
    selectedVersion === "manual"
      ? await input({
          message: `Enter a stable version greater than ${packageJson.version}`,
          default: suggestions.patch,
          validate: (value) => validateReleaseVersion(value, packageJson.version),
        })
      : selectedVersion;
  checkReleaseAvailable(version);
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());
  const changelogEntry = validateChangelogEntry(
    await editor({
      message: "Write the new changelog section",
      default: `= ${version} (${date}) =\n\n**Change:**\n* Describe the release changes\n`,
    }),
    version,
  );

  let testedUpTo;
  if (
    await confirm({
      message: "Update WordPress 'Tested up to' version?",
      default: false,
    })
  ) {
    const currentTestedVersion = /^Tested up to: (.+)$/m.exec(readme)?.[1] ?? "";
    testedUpTo = await input({
      message: "WordPress version tested",
      default: currentTestedVersion,
      validate: (value) =>
        /^\d+\.\d+(?:\.\d+)?$/.test(value) || "Enter a WordPress version such as 6.9.5.",
    });
  }

  if (
    !(await confirm({
      message: `Prepare and publish release ${version}? This will commit and push to develop, then create the GitHub release after CI passes.`,
      default: false,
    }))
  ) {
    console.log("⚠️ Release cancelled without changing files.");
    return;
  }

  run("npm", ["version", version, "--no-git-tag-version"]);
  writeFileSync(
    readmePath,
    updateReadme(readFileSync(readmePath, "utf8"), changelogEntry, testedUpTo),
  );

  console.log("\n🧪 Running the complete quality gate...");
  run("npm", ["run", "quality"]);

  console.log("\n📦 Committing release preparation and pushing develop...");
  run("git", ["add", "-A"]);
  run("git", ["commit", "-m", `Prepare release ${version}`]);
  run("git", ["push", "origin", "develop"]);

  const commit = output("git", ["rev-parse", "HEAD"]);
  await waitForTestRunner(commit);

  console.log("\n🚀 Publishing the release...");
  run("bash", ["env/dev/release.sh"]);
  console.log(`\n✅ Release ${version} completed.`);
}

const invokedFile = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invokedFile === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    if (error.name === "ExitPromptError") {
      console.log("\n⚠️ Release cancelled.");
      process.exitCode = 1;
      return;
    }
    console.error(`\n❌ Release failed: ${error.message}`);
    process.exitCode = 1;
  });
}
