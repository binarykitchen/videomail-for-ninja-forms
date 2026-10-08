# Releasing

## Steps

TODO: Automate the release process within a prompt.

1. Ensure the `develop` branch remains clean and current.
2. Review dependency updates with `npm outdated`:
   - When those are patches or minor updates, apply them.
   - Otherwise, when it is a major update, review the changes carefully and test all over again.
3. Build the project by running `npm run build`.
4. Then, run `npm run quality` to test everything.
5. Add the new changelog section honouring
   - the latest version to [readme.txt](./../readme.txt#changelog).
   - keep the language consistent with previous entries.
6. Set that latest version with an example like this: `npm version 12.x.x --no-git-tag-version`.
   - Which will call the the npm version lifecycle.
   - This npm lifecycle also synchronizes with
     - the stable tag,
     - plugin header,
     - PHP constant,
     - JavaScript diagnostic version,
     - and lockfile, all in one go.
7. (Optional) update "Tested up to" after testing the corresponding WordPress release.
8. Commit everything with a short summary which ...
   - can be copied and pasted from the latest version section from [readme.txt](./../readme.txt#changelog)
   - and then push to `develop`.
9. Wait for the Test Runner workflow to pass, see [our Github action page](https://github.com/binarykitchen/videomail-for-ninja-forms/actions)
10. Run `npm run release` 🚀

## Next Steps

- Wait for email confirmation that the release has been successfully deployed.
- Verify the new version on <https://wordpress.org/plugins/videomail-for-ninja-forms>
- Go to the playground [Playground](./PLAYGROUND.md) to test the new release.

## TODO

- Automate the release process as much as possible to reduce human error and ensure consistency.
  - For example a new `npm run release` prompt entering the changelog and version number could encapsulate all the steps from updating dependencies to pushing the final release.
