Polymer Project
==
Just playing with [polymer](http://www.polymer-project.org/)

Demo
==
https://alyssaq.github.io/polymer

Build
==
Run the following script to build the source files (concat, lint, minify, copy, etc) to a new folder called "app" and publish to gh-pages:

    > ./scripts/publish.sh

Run
==
Start a simple HTTP server and view the blog

#### Node (required http-server module): 

    > npm install http-server -g
    > http-server app -p 9999

#### Python:

    > cd app
    > python -m SimpleHTTPServer 9999

Open and view the blog at `localhost:9999`


