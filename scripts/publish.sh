#!/bin/bash

pushd .

#Clear app directory
rm -rf app/*

#build the app using grunt. app folder is created
grunt build

#Change to directory app
cd app

#commit any changes in app directory 
git commit -am "gh-pages"

#push the files from app folder to gh-pages
git push origin gh-pages

popd

