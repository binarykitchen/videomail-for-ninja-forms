# Releasing

From an up-to-date `develop` branch with your source changes committed, run:

```sh
npm run release
```

Choose a version,

- write the changelog, and confirm.
- The script installs locked dependencies, rebuilds and checks the plugin, commits the generated assets with the release preparation, waits for CI, and publishes.
- Installation, quality, or CI failures stop publication.

After deployment, verify the plugin on <https://wordpress.org/plugins/videomail-for-ninja-forms> and in the [Playground](./PLAYGROUND.md).
