# Releasing

## Steps

Run `npm run release` from a clean, up-to-date `develop` branch. This is the one
supported release command; it runs the interactive preparation and then the
existing `env/dev/release.sh` publisher. The interactive script:

1. Checks the branch, worktree, GitHub CLI authentication, and that local `develop`
   matches `origin/develop`.
2. Displays `npm outdated` and asks you to confirm you reviewed dependency updates.
   Apply desired updates and commit them before starting the release.
3. Shows the current version and offers patch (recommended), minor, major, or
   manual version choices, then opens your editor for a dated changelog section
   consistent with [readme.txt](./../readme.txt#changelog).
4. Optionally updates WordPress' "Tested up to" value.
5. Synchronizes the version across the plugin via `npm version`, updates the
   changelog, and runs the full `npm run quality` gate.
6. Commits the release preparation to `develop`, pushes it, and waits for the
   `Test Runner` workflow to pass on that commit.
7. Runs the existing publisher, which validates again, creates the release branch,
   merges and tags the release, pushes the release refs, and creates the GitHub
   release.

The script asks for confirmation before making release changes. A failure before
the preparation commit is pushed may leave version or changelog edits in the
worktree; review and resolve those before retrying. If a failure occurs after the
preparation commit is pushed, do not rerun the preparation prompts. Resolve any CI
failure and confirm the `Test Runner` passes, then resume the final publishing step
with `bash env/dev/release.sh`.

## Next Steps

- Wait for email confirmation that the release has been successfully deployed.
- Verify the new version on <https://wordpress.org/plugins/videomail-for-ninja-forms>
- Go to the playground [Playground](./PLAYGROUND.md) to test the new release.
