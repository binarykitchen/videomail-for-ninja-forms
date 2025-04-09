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

echo "Starting new release branch with version $PACKAGE_VERSION..."

# Ensures all is committed
if [[ $(git status --porcelain) ]]; then
    die "Aborting the bump! You have uncommitted changes."
fi

git checkout master
git push
git checkout develop
git push

# Start a new release
git flow release start $PACKAGE_VERSION

# Ensure dependencies are okay
npm install

# Rebuild all assets and zip them all into dist
npx gulp build
npx gulp zip

git add -A
git commit -am "Final commit of version $PACKAGE_VERSION" --no-edit

# Complete the previous release. This will also tag it.
git flow release finish $PACKAGE_VERSION -m "Completing release of $PACKAGE_VERSION"

git push

git checkout master
git push
git push --tags

# Prepare the develop branch for the new cycle
git checkout develop

unset GIT_MERGE_AUTOEDIT

echo "All good. Ready for the next cycle!"