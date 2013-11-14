#!/bin/bash

#Publish the files contained in app to gh-pages
rm -rf app/

#build the app using grunt. app folder is created
grunt build

#delete gh-pages branch
git push origin --delete gh-pages   

#push the files from app folder to gh-pages
git subtree push --prefix app origin gh-pages  
