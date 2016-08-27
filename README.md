# KeystoneJS + AngularJS Skeleton

This project shows how to build [KeystoneJS](https://github.com/keystonejs/keystone) apps that use [AngularJS](https://angularjs.org) as front-end.

A mobile app can be generated as well, it is built with [Apache Cordova](http://cordova.apache.org/).

## Installation
```bash
git clone https://github.com/dvdcastro/keystonejs-ng-skeleton.git
cd keystonejs-ng-skeleton
npm install
```
It uses bower for installing angular. If it asks anything, select the version you want.

Remember to create a ".env" file for the cloudinary and mailchimp stuff. You can create a [KeystoneJS yo generated project](https://github.com/keystonejs/generator-keystone) and copy it from there.

Also, if you have a different port or specific host settings, please update the host url in the file *public/js/index.js*.

Then just...
```
node keystone
```
## Project Structure

The project's structure is the same as the [KeystoneJS yo generated project](https://github.com/keystonejs/generator-keystone). It has additional routes for API, jade views for the angular partials, and more javascript with the angular app.
```
|--public
|  |--js
|  |  |--ang_*
|  |  |  The angular apps have the 'ang_' prefix, this is where the js is contained.
|  |  |  |--blog
|  |  |  |  |--blog.js
|  |  |  |--contact
|  |  |  |  |--contact.js
|  |  |  |--gallery
|  |  |  |  |--gallery.js
|  |  |  |--post
|  |  |  |  |--post.js
|  |  |  |  The angular modules for each page are under a folder with the same name.
|  |  |  |--main.js
|  |  |  |  The main angular module for the main view.
|  |  |  |--services.js
|  |  |  |  The Keystone API services consumed with ngResource
|--routes
|  |--ang_*
|  |  The routes for rendering the partials built with jade.
|  |--api
|  |  The api for our angular app
|  |--index.js
|  |  Modified for including the routes for the api and partials.
|--templates
|  |--layouts
|  |  |--ang_*.jade
|  |  |  The jade layouts for each angular app
|  |--views
|  |  |--ang_*
|  |  |  The jade partials for each angular module. The main file is called app.jade
```

## Material AngularJS

The project makes use of the project [Material Design for AngularJS Apps](https://github.com/angular/material) which comes out of the box.

## Bootstrap Material

The project is also using a [bootstrap material theme](http://fezvrasta.github.io/bootstrap-material-design/), if you want to see it in action, uncomment the following:
```jade
//- templates/views/ang_bootm/app.jade Lines 13 to 14
script(type='text/javascript').
  $(function() {$.material.init();});

//- templates/layouts/ang_bootm.jade Lines 24 to 25
link(href="/js/lib/bootstrap-material-design/dist/css/material-wfont.min.css", rel="stylesheet")
link(href="/js/lib/bootstrap-material-design/dist/css/ripples.min.css", rel="stylesheet")

//- templates/layouts/ang_bootm.jade Lines 63 to 64
script(src="/js/lib/bootstrap-material-design/dist/js/ripples.min.js")
script(src="/js/lib/bootstrap-material-design/dist/js/material.min.js")
```
