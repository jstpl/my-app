#!/bin/sh

cd ..
npm run build

cd src/console
node build-in-one.js
