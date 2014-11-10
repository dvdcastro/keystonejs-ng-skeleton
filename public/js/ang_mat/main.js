'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp', [
  'ngRoute',
  'ngMaterial',
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
.controller('MainCtrl', ['$scope', '$interpolate', '$location', function($scope, $interpolate, $location) {
  var tabs = [
    { title: 'Blog', path: 'blog', idx: 0},
    { title: 'Gallery', path: 'gallery', idx: 1}  ,
    { title: 'Contact', path: 'contact', idx: 2}
  ];

  $scope.tabs = tabs;
  $scope.predicate = "title";
  $scope.reversed = true;
  $scope.selectedIndex = 0;
  $scope.allowDisable = true;

  $scope.onTabSelected = onTabSelected;
  $scope.announceSelected = announceSelected;
  $scope.announceDeselected = announceDeselected;

  $scope.go = function ( tab, path ) {
    onTabSelected(tab);
    $location.path(path);
  };

  function onTabSelected(tab) {
    $scope.selectedIndex = tab.idx;
    // console.log('Selected tab: ' + this.$index);

    $scope.announceSelected(tab);
  }

  function announceDeselected(tab) {
    $scope.farewell = $interpolate("Goodbye {{title}}!")(tab);
  }

  function announceSelected(tab) {
    $scope.greeting = $interpolate("Hello {{title}}!")(tab);
  }
}]);