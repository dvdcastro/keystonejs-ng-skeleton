'use strict';

angular.module('mainApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'ang_bootm/gallery' + template_ext,
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$routeParams', 'Gallery', function($routeParams, Gallery) {
  var self = this;

  self.galleries = Gallery.query();
}]);