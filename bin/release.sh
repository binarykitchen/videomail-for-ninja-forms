#!/bin/bash
set -e

export GIT_MERGE_AUTOEDIT=no

die() {
    use unset GIT_MERGE_AUTOEDIT
    echo >&2 "☠ ☠ ☠ ☠ ☠ ☠ ☠  $@  ☠ ☠ ☠ ☠ ☠ ☠ ☠"
    exit 1
}

# ensures all is commited
if [[ `git status --porcelain` ]]; then
    die "Aborting the bump! You have uncommitted changes."
fi

VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

# Ensures nothing is broken
# todo add unit tests for JS code
# npm test

git checkout master
git push
git checkout develop
git push

# Start a new release
git flow release start $VERSION

# Ensure dependencies are okay
npm prune
npm install

# Rebuild all assets + zip with default task
gulp

echo "here"

# Ensures again that nothing is broken with the build
# npm test

git add -A

echo "there"

git commit -am "Final commit of version $VERSION" --no-edit

echo "where"

# Complete the previous release
git flow release finish $VERSION -m "Completing release of $VERSION" # This will also tag it

git push

git checkout master
git push
git push --tags

# Prepare the develop branch for the new cycle
git checkout develop

unset GIT_MERGE_AUTOEDIT

echo "All good. Ready for the next cycle!"