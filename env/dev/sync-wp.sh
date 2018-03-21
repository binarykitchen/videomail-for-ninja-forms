#!/usr/bin/env bash

set -eu

./wp-plugin-git-svn-sync.sh \
	--plugin-name="videomail-for-ninja-forms" \
	--git-repo="https://github.com/binarykitchen/videomail-for-ninja-forms" \
	--svn-user="michael.heuberger" \
	--assets-dir="assets"
