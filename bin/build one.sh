#!/bin/sh

cd ..
npm run build

cd src/packages/pack
node build-in-one.js
