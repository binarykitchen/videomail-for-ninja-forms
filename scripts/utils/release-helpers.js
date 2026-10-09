const changelogHeading = /(^== Changelog ==\r?\n)(?:[ \t]*\r?\n)*/m;

export function suggestReleaseVersions(currentVersion) {
  const [major, minor, patch] = currentVersion.split(".").map(BigInt);

  return {
    patch: `${major}.${minor}.${patch + 1n}`,
    minor: `${major}.${minor + 1n}.0`,
    major: `${major + 1n}.0.0`,
  };
}

export function validateReleaseVersion(version, currentVersion) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    return "Enter a stable version in major.minor.patch format.";
  }

  const versionParts = version.split(".").map(BigInt);
  const currentParts = currentVersion.split(".").map(BigInt);
  const comparison = versionParts.findIndex(
    (part, index) => part !== currentParts[index],
  );

  if (comparison === -1 || versionParts[comparison] <= currentParts[comparison]) {
    return `Version must be greater than the current version ${currentVersion}.`;
  }

  return true;
}

export function validateChangelogEntry(entry, version) {
  const trimmedEntry = entry.trim();
  const firstLine = trimmedEntry.split(/\r?\n/, 1)[0];

  if (!new RegExp(`^= ${version.replaceAll(".", "\\.")} \\(.+\\) =$`).test(firstLine)) {
    throw new Error(`Changelog entry must start with "= ${version} (date) =".`);
  }

  if (!/^[*-]\s+\S/m.test(trimmedEntry)) {
    throw new Error("Changelog entry must include at least one bullet point.");
  }

  return `${trimmedEntry}\n`;
}

export function updateReadme(contents, entry, testedUpTo) {
  const version = /^= (\d+\.\d+\.\d+) \(/.exec(entry)?.[1];
  if (!version) throw new Error("Could not read the version from the changelog entry.");
  if (new RegExp(`^= ${version.replaceAll(".", "\\.")} \\(`, "m").test(contents)) {
    throw new Error(`readme.txt already contains a changelog entry for ${version}.`);
  }
  if (!changelogHeading.test(contents)) {
    throw new Error("Could not find the changelog section in readme.txt.");
  }

  let updated = contents.replace(
    changelogHeading,
    (_match, heading) => `${heading}\n${entry}\n`,
  );

  if (testedUpTo !== undefined) {
    if (!/^Tested up to: .+$/m.test(updated)) {
      throw new Error("Could not find the WordPress 'Tested up to' field in readme.txt.");
    }
    updated = updated.replace(/^Tested up to: .*$/m, `Tested up to: ${testedUpTo}`);
  }

  return updated;
}
