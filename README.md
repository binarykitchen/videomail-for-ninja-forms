# Videomail for Ninja Forms (developer documentation)

[![Test Runner](https://github.com/binarykitchen/videomail-for-ninja-forms/actions/workflows/push.yml/badge.svg)](https://github.com/binarykitchen/videomail-for-ninja-forms/actions/workflows/push.yml)

Record videos in WordPress forms! 🙌🏼 ⭐

> Finally you can encode any webcam recordings from modern browsers and mobiles into MP4 + WebM within seconds. This without the need for Flash, Java nor any other plugins / addons. Just JavaScript.

With this add-on recording videos in Wordpress forms comes true. No further coding required. Just install + configure a bit, that’s all.

With maximum accessibility:

- Supports Sign Language for the beautiful Deaf community
- Adds captions and transcripts for recorded videos with audio
- Comes with keyboard navigation and screen reader support for all users

## Dependencies

Requires the [Ninja Forms plugin](https://github.com/wpninjas/ninja-forms).

In short: this add-on runs on the Ninja Forms plugin engine where you can configure forms very easily. Upon installation, a new type will be added to enable recordable videos.

## Playground

If you would like to have a quick play, you can quickly spawn a temporary WordPress site using TasteWP with this URL: <https://tastewp.com/>

There you always get a fresh WordPress installation where you can install & activate and test our plugin the simple way 😎

### Playground Notes

More detailed instructions can be found in [doc/PLAYGROUND.md](doc/PLAYGROUND.md).

## Development (Local)

For local development, follow the instructions in [doc/LOCAL.md](doc/LOCAL.md).

## Directory structure

In `src` you do the normal development work. When gulp watches for changes, they get recompiled into the `target` folder and will be served from there.

This is needed so that this repository can be used right away as a plugin folder without the need to run any other commands. This is a requirement for automatic Ninja Forms plugin releases.

In `dist` you can find a latest version in a zip file for easier distribution. Can be useful sometimes. `env` contains code depending on environment, such as bash scripts for building releases.

## Documentation

In the `/doc` folder we place in all text and images for the public documentation.

## Report bugs

<https://github.com/binarykitchen/videomail-for-ninja-forms/issues>

## Releasing

See [RELEASING.md](doc/RELEASING.md) for detailed instructions on how to release a new version.

## Quality checks and tests

For tests and checks, go to [doc/QUALITY.md](doc/QUALITY.md).

### Recommended next release improvements

First, there is so much **wow** in this plugin and plenty of ideas for further improvements.

You can inspect our [TODO list](TODO.md) to improve the release process, testing, and CI/CD workflow.

## Ask for help

<https://binarykitchen.com>
