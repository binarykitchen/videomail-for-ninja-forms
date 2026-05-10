#!/bin/bash
set -e

export GIT_MERGE_AUTOEDIT=no

die() {
    unset GIT_MERGE_AUTOEDIT
    echo >&2 "☠ ☠ ☠ ☠ ☠ ☠ ☠ $* ☠ ☠ ☠ ☠ ☠ ☠ ☠"
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
if ! git merge --no-ff --no-commit "$RELEASE_BRANCH"; then
    # ZIP is a binary artifact and can conflict between master/develop histories.
    # In that specific case, keep the release branch archive on master.
    UNMERGED_FILES=$(git diff --name-only --diff-filter=U)

    if [[ "$UNMERGED_FILES" == "dist/videomail-for-ninja-forms.zip" ]]; then
        git checkout --theirs dist/videomail-for-ninja-forms.zip
        git add dist/videomail-for-ninja-forms.zip
    else
        die "Aborting release! Merge conflict(s) detected:\n$UNMERGED_FILES"
    fi
fi

if [[ -n "$(git diff --name-only --diff-filter=U)" ]]; then
    die "Aborting release! Unresolved merge conflicts remain."
fi

git commit -m "Merge branch '$RELEASE_BRANCH'"

# Create annotated tag on master
git tag -a "$PACKAGE_VERSION" -m "Completing release of $PACKAGE_VERSION"

# Back-merge tag into develop with --no-ff
git checkout develop
git merge --no-ff "$PACKAGE_VERSION" -m "Merge tag '$PACKAGE_VERSION' into develop"

# Push everything to remote
git push origin master develop --tags

# Create GitHub release entry and attach the plugin zip.
# A git tag alone does not create a GitHub Release object.
DIST_ZIP="dist/videomail-for-ninja-forms.zip"
if [[ ! -f "$DIST_ZIP" ]]; then
    die "Expected release archive '$DIST_ZIP' is missing."
fi

if command -v gh >/dev/null 2>&1; then
    if gh release view "$PACKAGE_VERSION" >/dev/null 2>&1; then
        echo "GitHub release '$PACKAGE_VERSION' already exists. Skipping creation."
    else
        gh release create "$PACKAGE_VERSION" "$DIST_ZIP" \
            --title "$PACKAGE_VERSION" \
            --generate-notes
    fi
else
    die "GitHub CLI 'gh' is required to create a GitHub release. Install it and run again."
fi

# Delete the release branch locally and remotely
git branch -d "$RELEASE_BRANCH"
git push origin --delete "$RELEASE_BRANCH" 2>/dev/null || true

# Prepare the develop branch for the new cycle
git checkout develop

unset GIT_MERGE_AUTOEDIT

echo "All good. Ready for the next cycle!"