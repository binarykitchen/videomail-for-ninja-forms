# Ninja Forms - Videomail

[![Build Status](https://travis-ci.org/kjohnson/ninja-forms-videomail.svg?branch=master)](https://travis-ci.org/kjohnson/ninja-forms-videomail)

Record videos in Ninja Forms!

> Finally you can encode any webcam recordings from modern browsers and mobiles into MP4 + WebM within seconds. This without the need for Flash, Java nor any other plugins / addons. Just JavaScript.

With this add-on recording videos in Wordpress forms comes true. No further coding required. Just install + configure a bit, that's all.

## Dependencies

Requires the [Ninja Forms v3 plugin](https://github.com/wpninjas/ninja-forms).

In short: this add-on runs on the Ninja Forms plugin engine where you can configure forms very easily. Upon installation, a new type will be added to enable recordable videos.

## Development

1. Install Bitnami's Wordpress Stack
2. Install Ninja Forms Plugin
3. `git clone git@github.com:kjohnson/ninja-forms-videomail.git`
4. Install latest nodejs, best with [nvm](https://github.com/creationix/nvm)
5. `npm install` to install npm dependencies
6. `gulp watch` which will open Google Chrome and automatically reloads upon changes (PHP, JS and CSS)

## Options

That new recordable video field comes with many options you can configure yourself such as duration, width, audio on/off and much more.

## Whitelisting

For local development, everthing will work right away because the localhost URL is already whitelisted on the videomail server. But once you deploy your Wordpress site out in the wild, we will have to whitelist your production URL. For that, just contact [https://binarykitchen.com](https://binarykitchen.com). Very easy.

## Videomail-client library

This WordPress plugin is based on the open sourced npm package [videomail-client](https://github.com/binarykitchen/videomail-client). There you can find more information on the technical side of things.

## Live example

There is also the live site [videomail.io](https://videomail.io) where you can see the videomail-client in action and use it right away for free, anytime, anywhere. Many people, especially Deafs and Sign Language users, already use it for their everyday communication.
