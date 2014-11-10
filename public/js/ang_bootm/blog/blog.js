'use strict';

angular.module('mainApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog/:key', {
    templateUrl: 'ang-bootm/blog',
    controller: 'HomeCtrl',
    reloadOnSearch: false
  });

  $routeProvider.when('/blog', {
    templateUrl: 'ang-bootm/blog',
    controller: 'HomeCtrl',
    reloadOnSearch: false
  });
}])

.controller('HomeCtrl', ['Post', 'PostByCategory', 'PostCategory', '$routeParams', '$scope', '$location', function(Post, PostByCategory, PostCategory, $routeParams, $scope, $location) {
  var blog = this;

  blog.posts = [];

  if ($routeParams.key != null)
    blog.posts = PostByCategory.query({key:$routeParams.key});
  else
    blog.posts = Post.query();

  blog.categories = [{key:'list', name:'All'}];

  $scope.curr_cat = 'list';

  blog.categories = PostCategory.query(function(){
    blog.categories.unshift({key:'list', name:'All'});
  });

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.refreshPosts = function(the_key) {
    if (the_key == 'list')
      blog.posts = Post.query();
    else
      blog.posts = PostByCategory.query({key:the_key});

    $scope.curr_cat = the_key;
  };

}]);

