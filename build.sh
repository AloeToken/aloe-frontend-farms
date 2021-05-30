#!/bin/sh

read -r -p "Upgrade dependencies? [y/N] " dep
if [ "$dep" = "Y" ] || [ "$dep" = "y" ]
then
    yarn upgrade
fi

rm -r ./build/*
npm run-script build
rm -r /data/www/test.aloeswap.com/*
cp -r ./build/* /data/www/test.aloeswap.com/
