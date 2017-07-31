#!/bin/bash
set -e

export GIT_MERGE_AUTOEDIT=no

die() {
    unset GIT_MERGE_AUTOEDIT
    echo >&2 "☠ ☠ ☠ ☠ ☠ ☠ ☠  $@  ☠ ☠ ☠ ☠ ☠ ☠ ☠"
    exit 1
}

# todo: figure out an elegant solution to avoid duplicate code
# when having three bash scripts for patches, features and releases
# maybe with command line args?
# when done, rename this file

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

# https://stackoverflow.com/questions/45047976/how-to-awk-extract-the-newer-version-number/45049299#45049299
# \K : To match everything on left to it but not print it.
# -m1: It to make grep stop after printing one match.
read VERSION <<< $(gulp bumpVersion --importance=$IMPORTANCE | grep -oP -m1 'Bumped\s\d+.\d+.\d+\sto\s\K[^ ]+')

# Ensures nothing is broken
# yarn test

git checkout master
git push
git checkout develop
git push

echo "Starting new release branch with version $VERSION..."

# Start a new release
git flow release start $VERSION

# This will increment version in package.json
gulp bumpVersion --write --version=$VERSION

# Ensure dependencies are okay
yarn clean
yarn install

# Rebuild all assets and zip them all into dist
gulp zip

# Ensures again that nothing is broken with the build
# yarn test

git add -A
git commit -am "Final commit of version $VERSION" --no-edit

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