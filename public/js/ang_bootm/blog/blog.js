'use strict';

angular.module('mainApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog/:key', {
    templateUrl: 'ang_bootm/blog' + template_ext,
    controller: 'HomeCtrl',
    reloadOnSearch: false
  })

  .when('/blog', {
    templateUrl: 'ang_bootm/blog' + template_ext,
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

  var curr_cat = {key:'list', name:'All'};

  $scope.curr_cat = curr_cat;

  blog.categories = [];

  blog.categories = PostCategory.query(function(){
    blog.categories.unshift(curr_cat);
  });

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.refreshPosts = function(the_key, the_name) {
    if (the_key == 'list')
      blog.posts = Post.query();
    else
      blog.posts = PostByCategory.query({key:the_key});

    $scope.curr_cat = {key:the_key, name:the_name};
  };

}]);

