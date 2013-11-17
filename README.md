Polymer Project
==
Just playing with [polymer](http://www.polymer-project.org/)

Demo
==
https://alyssaq.github.io/polymer

Usage
==
To build the project, which creates the `app` folder:
    > grunt build
    
To build and stay connected with live-reload for development (files served from `src`):
    > grunt dev
    
To build and run a server from production folder `app`:
    > grunt prod
    
To run tests:
    > grunt test

Publish to gh-pages
==
Run the following script to build the source files (concat, lint, minify, copy, etc) to a new folder called `app` and publish to gh-pages:

    > ./scripts/publish.sh

Run
==
Start a simple HTTP server and view the blog

#### Node (requires http-server module): 

    > npm install http-server -g
    > http-server app -p 9999

#### Python:

    > cd app
    > python -m SimpleHTTPServer 9999

Open and view the blog at `localhost:9999`

Contributing
==
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

