#!/usr/bin/env bash

DIR=$(dirname $0)
DIST=$DIR/../node_modules/videomail-client/dist/
JS_ASSETS=$DIR/../assets/js/

cp $DIST/videomail-client.js $JS_ASSETS/videomail-client.js
cp $DIST/videomail-client.min.js $JS_ASSETS/min/videomail-client.js
