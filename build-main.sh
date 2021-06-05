#!/bin/sh

read -r -p "Upgrade UIKIT dependency? [y/N] " dep
if [ "$dep" = "Y" ] || [ "$dep" = "y" ]
then
    yarn upgrade @pancakeswap-libs/uikit
fi

rm -r ./build/*
npm run-script build
rm -r /data/www/aloeswap.com/*
cp -r ./build/* /data/www/aloeswap.com/
