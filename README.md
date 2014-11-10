# KeystoneJS + AngularJS Skeleton

This project is intended to show how to build [KeystoneJS](http://keystonejs.com) apps that use [AngularJS](https://angularjs.org) as front-end.

After cloning you just have to run:

    npm install
  
It uses bower for installing angular. If it asks anything, select the version you want.

Remember to create a ".env" file for the cloudinary and mailchimp stuff. You can create a [KeystoneJS yo generated project](https://github.com/keystonejs/generator-keystone) and copy it form there.

## Material AngularJS

The project makes use of the project [Material Design for AngularJS Apps](https://github.com/angular/material) which comes out of the box.

## Bootstrap Material

The project is also using a [bootstrap material theme](http://fezvrasta.github.io/bootstrap-material-design/), if you want to see it in action, uncomment the following:

    //- templates/views/ang_bootm/app.jade Lines 13 to 14
    script(type='text/javascript').
      $(function() {$.material.init();});
      
    //- templates/layouts/ang_bootm.jade Lines 24 to 25
    link(href="/js/lib/bootstrap-material-design/dist/css/material-wfont.min.css", rel="stylesheet")
    link(href="/js/lib/bootstrap-material-design/dist/css/ripples.min.css", rel="stylesheet")
    
    //- templates/layouts/ang_bootm.jade Lines 63 to 64
    script(src="/js/lib/bootstrap-material-design/dist/js/ripples.min.js")
    script(src="/js/lib/bootstrap-material-design/dist/js/material.min.js")


