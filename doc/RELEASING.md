# Releasing

## Steps

1. Ensure the `develop` branch remains clean and current.
2. Review dependency updates with `npm outdated`:
   - When those are just patches or minor updates, apply them.
   - Otherwise, when it is a major update, review the changes carefully and test all over again.
3. Then, run `npm run quality` to test everything.
4. Add the new changelog section honouring that latest version to [readme.txt](./../readme.txt#changelog).
5. Run one final git commit to capture all changes before setting the new version.
6. Set that latest version with this example: `npm version 12.1.2 --no-git-tag-version`. Which will call the the npm version lifecycle.
   - This npm lifecycle synchronizes the stable tag, plugin header, PHP constant, JavaScript diagnostic version, and lockfile, all in one go.
7. (Optional) update "Tested up to" after testing the corresponding WordPress release.
8. Build the project by running `npm run build`.
9. Commit everything with a short summary which ...
   - can be copied and pasted from the latest version section in [readme.txt](./../readme.txt)
   - and then push to `develop`.
10. Wait for the Test Runner workflow to pass, see [our Github action page](https://github.com/binarykitchen/videomail-for-ninja-forms/actions)
11. Run `npm run release` 🚀

## Next Steps

- Wait for email confirmation that the release has been successfully deployed.
- Verify the new version on <https://wordpress.org/plugins/videomail-for-ninja-forms>
- Go to the playground [Playground](./PLAYGROUND.md) to test the new release.

## TODO

- Automate the release process as much as possible to reduce human error and ensure consistency.
  - For example a new `npm run release` prompt entering the changelog and version number could encapsulate all the steps from updating dependencies to pushing the final release.
