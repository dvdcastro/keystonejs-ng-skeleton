'use strict';

angular.module('mainApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog/:key', {
    templateUrl: 'ang-mat/blog',
    controller: 'HomeCtrl',
    reloadOnSearch: false
  });

  $routeProvider.when('/blog', {
    templateUrl: 'ang-mat/blog',
    controller: 'HomeCtrl',
    reloadOnSearch: false
  });
}])

.controller('HomeCtrl', ['Post', 'PostByCategory', 'PostCategory', '$routeParams', '$scope', '$location', '$mdSidenav', function(Post, PostByCategory, PostCategory, $routeParams, $scope, $location, $mdSidenav) {
  var blog = this;

  blog.posts = [];

  if ($routeParams.key != null)
    blog.posts = PostByCategory.query({key:$routeParams.key});
  else
    blog.posts = Post.query();

  blog.categories = [{key:'list', name:'All'}];

  blog.categories = PostCategory.query(function(){
    blog.categories.unshift({key:'list', name:'All'});
  });

  $scope.go = function ( path ) {
    $location.path( path );
  };

  blog.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };

  $scope.refreshPosts = function(the_key) {
    if (the_key == 'list')
      blog.posts = Post.query();
    else
      blog.posts = PostByCategory.query({key:the_key});
  };

  $scope.closeLeft = function() {
    $mdSidenav('left').close();
  };

}]);

