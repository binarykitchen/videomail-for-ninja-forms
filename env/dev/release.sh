#!/bin/bash
set -e

export GIT_MERGE_AUTOEDIT=no

die() {
    unset GIT_MERGE_AUTOEDIT
    echo >&2 "☠ ☠ ☠ ☠ ☠ ☠ ☠  $@  ☠ ☠ ☠ ☠ ☠ ☠ ☠"
    exit 1
}

PACKAGE_VERSION=$(cat package.json | jq -r '.version')

if [[ -z "$PACKAGE_VERSION" ]]; then
    die "Aborting the bump! Version is missing."
fi

echo "Starting new release with version $PACKAGE_VERSION..."

# Ensures all is committed
if [[ $(git status --porcelain) ]]; then
    die "Aborting the bump! You have uncommitted changes."
fi

# Sync with remote branches
git checkout master
git pull origin master

git checkout develop
git pull origin develop

# Create and checkout release branch
RELEASE_BRANCH="release/$PACKAGE_VERSION"
if git rev-parse --verify "$RELEASE_BRANCH" >/dev/null 2>&1; then
    die "Release branch '$RELEASE_BRANCH' already exists."
fi
git checkout -b "$RELEASE_BRANCH" develop

# Ensure dependencies are okay
npm install

# Rebuild all assets and zip them all into dist
npx gulp build
npx gulp zip

git add -A
git commit -m "Final commit of version $PACKAGE_VERSION"

# Merge release branch into master with --no-ff
git checkout master
git merge --no-ff "$RELEASE_BRANCH" -m "Merge branch '$RELEASE_BRANCH'"

# Create annotated tag on master
git tag -a "$PACKAGE_VERSION" -m "Completing release of $PACKAGE_VERSION"

# Back-merge tag into develop with --no-ff
git checkout develop
git merge --no-ff "$PACKAGE_VERSION" -m "Merge tag '$PACKAGE_VERSION' into develop"

# Push everything to remote
git push origin master develop --tags

# Delete the release branch locally and remotely
git branch -d "$RELEASE_BRANCH"
git push origin --delete "$RELEASE_BRANCH" 2>/dev/null || true

# Prepare the develop branch for the new cycle
git checkout develop

unset GIT_MERGE_AUTOEDIT

echo "All good. Ready for the next cycle!"