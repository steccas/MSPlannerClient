#!/bin/bash

#https://github.com/nativefier/nativefier/issues/207

if [ -z "$1" ]
  then
    echo "Please specify destination platform"
    echo "You can choose --win, --linux, --mac or --all"
    echo "i.e.: ./build.sh linux"
    exit 1
fi

platform=$1

function buildWin {
    node ./msplanner_client_win.js
}

function buildLinux {
    node ./msplanner_client_linux.js
}

function buildMac {
    node ./msplanner_client_mac.js
}

function buildAll {
    buildWin
    buildLinux
    buildMac
}

if [ $platform == --win ]
    then
        echo "Building for Windows"
        buildWin

elif [ $platform == --linux ]
    then
        echo "Building for linux"
        buildLinux

elif [ $platform == --mac ]
    then
        echo "Building for Mac"
        buildMac

elif [ $platform == --all ]
then
    echo "Building for all platforms"
    buildAll

else
    echo "You didn't specify a valid platform"
    exit 2

fi

exit 0
