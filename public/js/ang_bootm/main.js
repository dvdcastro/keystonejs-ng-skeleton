'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp', [
  'ngRoute',
  'ngSanitize',
  'mainApp.blog',
  'mainApp.post',
  'mainApp.gallery',
  'mainApp.contact',
  'postServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/blog'});
}])
.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
  var tabs = [
    { title: 'Blog', path: 'blog', idx: 0},
    { title: 'Gallery', path: 'gallery', idx: 1}  ,
    { title: 'Contact', path: 'contact', idx: 2}
  ];

  $scope.tabs = tabs;

  $scope.curr_title = tabs[0].title;

  $scope.go = function ( tab, path ) {
    $scope.curr_title = tab.title;
    $location.path(path);
  };
}]);