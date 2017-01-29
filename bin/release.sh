#!/bin/bash
set -e

export GIT_MERGE_AUTOEDIT=no

die() {
    use unset GIT_MERGE_AUTOEDIT
    echo >&2 "☠ ☠ ☠ ☠ ☠ ☠ ☠  $@  ☠ ☠ ☠ ☠ ☠ ☠ ☠"
    exit 1
}

for i in "$@"
do
case $i in
    -i=*|--importance=*)
    IMPORTANCE="${i#*=}"
    shift # past argument=value
    ;;
    *)
    # unknown option
    ;;
esac
done

if [[ -z "$IMPORTANCE" ]]; then
    die "Aborting the bump! Argument --importance is missing."
fi

# ensures all is commited
if [[ `git status --porcelain` ]]; then
    die "Aborting the bump! You have uncommitted changes."
fi

read CURRENT_VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)
read VERSION <<< $(gulp bumpVersion --importance=$IMPORTANCE | awk '/to/ {print $5}')

# Ensures nothing is broken
# todo add unit tests for js code
# npm test

git checkout master
git push
git checkout develop
git push

# Start a new release
git flow release start $VERSION

# This will increment version in package.json
gulp bumpVersion --write --version=$VERSION

# This will increment version in PHP entry file
gulp bumpPHPVersion --currentVersion=$CURRENT_VERSION --newVersion $VERSION

# Ensure dependencies are okay
npm prune
npm install

# Rebuild all assets
gulp build --minify

# Ensures again that nothing is broken with the build
# npm test

git add -A
git commit -am "Final commit of version $VERSION" --no-edit

echo "Publishing to npm ..."
npm publish

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