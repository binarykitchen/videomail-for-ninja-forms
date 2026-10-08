# Releasing

1. Ensure the `develop` branch remains clean and current.
2. Review dependency updates with `npm outdated`.
   - When those are patches or minor updates, apply them.
   - Otherwise, when it is a major update, review the changes carefully and apply them as needed.
3. Add the new changelog section to [readme.txt](./../readme.txt).
4. Set the version to that new version number once, for example like this: `npm version 12.1.0 --no-git-tag-version`.
   - This npm lifecycle synchronizes the stable tag, plugin header, PHP constant, JavaScript diagnostic version, and lockfile, all in one go.
5. (Optional) update "Tested up to" after testing the corresponding WordPress release.
6. Run `npm run quality`, review the generated files
7. Commit everything with a short summary which ...
   - can be extracted from the [readme.txt](./../readme.txt)
   - and then push to `develop`.
8. Wait for the Test Runner workflow to pass, see [our Github action page](https://github.com/binarykitchen/videomail-for-ninja-forms/actions)
9. Run `npm run release`. Quality must pass before the release script starts. The script installs locked dependencies and repeats quality checks after updating the branches, before creating the release branch, packaging, merging or tagging.
10. The release workflow deploys to WordPress.org and attaches its canonical ZIP to GitHub. Verify the new version on <https://wordpress.org/plugins/videomail-for-ninja-forms>.
