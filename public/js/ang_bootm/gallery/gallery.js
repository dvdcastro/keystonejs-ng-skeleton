'use strict';

angular.module('mainApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'ang-bootm/gallery',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$routeParams', 'Gallery', function($routeParams, Gallery) {
  var self = this;

  self.galleries = Gallery.query();
}]);