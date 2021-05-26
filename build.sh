#!/bin/sh

rm -r ./build/*
npm run-script build
rm -r /data/www/test.aloeswap.com/*
cp -r ./build/* /data/www/test.aloeswap.com/