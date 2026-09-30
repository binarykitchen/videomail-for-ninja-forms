#!/usr/bin/env bash
set -Eeuo pipefail

export GIT_MERGE_AUTOEDIT=no

cleanup() {
    unset GIT_MERGE_AUTOEDIT
}

trap cleanup EXIT

die() {
    printf 'Error: %s\n' "$*" >&2
    exit 1
}

for command in git gh jq npm; do
    command -v "$command" >/dev/null 2>&1 || die "Required command '$command' is not installed."
done

if [[ "$(git branch --show-current)" != "develop" ]]; then
    die "Releases must start on the develop branch."
fi

if [[ $(git status --porcelain) ]]; then
    die "You have uncommitted changes."
fi

gh auth status >/dev/null 2>&1 || die "GitHub CLI is not authenticated."

git fetch origin --prune

for branch in master develop; do
    git show-ref --verify --quiet "refs/remotes/origin/$branch" ||
        die "Remote branch 'origin/$branch' does not exist."
done

git checkout master
git pull --ff-only origin master

git checkout develop
git pull --ff-only origin develop

if ! PACKAGE_VERSION=$(jq -er '.version | select(type == "string" and length > 0)' package.json); then
    die "Version is missing from package.json."
fi

if [[ ! "$PACKAGE_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+([.-][0-9A-Za-z.-]+)?$ ]]; then
    die "Version '$PACKAGE_VERSION' is not valid."
fi

npm run version:check

if ! grep -Eq "^= ${PACKAGE_VERSION//./\\.} \\(.+\\) =$" readme.txt; then
    die "readme.txt has no changelog heading for version $PACKAGE_VERSION."
fi

if git rev-parse --verify "refs/tags/$PACKAGE_VERSION" >/dev/null 2>&1; then
    die "Tag '$PACKAGE_VERSION' already exists."
fi

echo "Starting new release with version $PACKAGE_VERSION..."

# Create and checkout release branch
RELEASE_BRANCH="release/$PACKAGE_VERSION"
if git rev-parse --verify "$RELEASE_BRANCH" >/dev/null 2>&1; then
    die "Release branch '$RELEASE_BRANCH' already exists."
fi
git checkout -b "$RELEASE_BRANCH" develop

# Install the exact dependency graph, validate sources, and package the plugin.
npm ci
npm run check
npm run package

DIST_ZIP="dist/videomail-for-ninja-forms.zip"
if [[ ! -s "$DIST_ZIP" ]]; then
    die "Expected release archive '$DIST_ZIP' is missing or empty."
fi

git add -A
if git diff --cached --quiet; then
    die "The release produced no changes to commit."
fi
git commit -m "Final commit of version $PACKAGE_VERSION"

# Merge release branch into master with --no-ff
git checkout master
if ! git merge --no-ff --no-commit "$RELEASE_BRANCH"; then
    UNMERGED_FILES=$(git diff --name-only --diff-filter=U)

    if [[ "$UNMERGED_FILES" == "$DIST_ZIP" ]]; then
        git restore --source="$RELEASE_BRANCH" --staged --worktree -- "$DIST_ZIP"
    else
        die "Merge conflicts detected: $UNMERGED_FILES"
    fi
fi

if [[ -n "$(git diff --name-only --diff-filter=U)" ]]; then
    die "Unresolved merge conflicts remain."
fi

git commit -m "Merge branch '$RELEASE_BRANCH'"

# Create annotated tag on master
git tag -a "$PACKAGE_VERSION" -m "Completing release of $PACKAGE_VERSION"

# Back-merge tag into develop with --no-ff
git checkout develop
git merge --no-ff "$PACKAGE_VERSION" -m "Merge tag '$PACKAGE_VERSION' into develop"

# Push everything to remote
git push origin master develop --tags

echo "Creating GitHub release for version $PACKAGE_VERSION..."

gh release create "$PACKAGE_VERSION" \
    --verify-tag \
    --title "$PACKAGE_VERSION" \
    --generate-notes

# The release event now builds, deploys, and attaches the canonical ZIP.
git branch -d "$RELEASE_BRANCH"

git checkout develop

echo "All good. Ready for the next cycle!"