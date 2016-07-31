# Ninja Forms - Videomail

[![Build Status](https://travis-ci.org/kjohnson/ninja-forms-videomail.svg?branch=master)](https://travis-ci.org/kjohnson/ninja-forms-videomail)

Record videos in Ninja Forms!

> Finally you can encode any webcam recordings from modern browsers and mobiles into MP4 + WebM within seconds. This without the need for Flash, Java nor any other plugins / addons. Just JavaScript.

With it you can enable recordable videos in Wordpress forms very easily within seconds. Just with drag and drop. No coding required.

## Dependencies

Requires the [Ninja Forms v3 plugin](https://github.com/wpninjas/ninja-forms).

## Development

1. `git clone git@github.com:kjohnson/ninja-forms-videomail.git`
2. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
3. `npm install` to install npm dependencies
4. `gulp watch` to rebuild assets when changes are made
5. open local WordPress site in your browser

## Options

Also comes with many options you can configure yourself such as duration, width, audio on/off and much more.

## Whitelisting

For local development, everthing will work right away because the localhost URL is already whitelisted on the videomail server. But once you deploy your Wordpress site out in the wild, we will have to whitelist your production URL. For that, just contact [https://binarykitchen.com](https://binarykitchen.com). Very easy.

## Videomail-client library

This WordPress plugin is based on the open sourced npm package [videomail-client](https://github.com/binarykitchen/videomail-client). There you can find more information on the technical side of things.

## Live example

There is also the live site [videomail.io](https://videomail.io) where you can see the videomail-client in action and use it right away for free, anytime, anywhere. Many people, especially Deafs, already use it for their everyday communication.
