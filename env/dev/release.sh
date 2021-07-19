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

for i in "$@"; do
    case $i in
    -i=* | --importance=*)
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
if [[ $(git status --porcelain) ]]; then
    die "Aborting the bump! You have uncommitted changes."
fi

# https://stackoverflow.com/questions/45047976/how-to-awk-extract-the-newer-version-number/45048086#45048086
read VERSION <<<$(npm run gulp bumpVersion --importance=$IMPORTANCE | awk '!a{if(match($0,/to [0-9][0-9]?\.[0-9][0-9]?\.[0-9][0-9]?/)){print substr($0,RSTART+3,RLENGTH-3);a=1}}')

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
npm install

# Rebuild all assets and zip them all into dist
gulp build
gulp zip

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
