var postServices = angular.module('postServices', ['ngResource']);

postServices.factory('Post', ['$resource',
  function($resource){
    return $resource('api/post/:slug', {}, {
      query: {method:'GET', params:{slug:'list'}, isArray:true}
    });
  }]);

postServices.factory('PostCategory', ['$resource',
  function($resource){
    return $resource('api/post-category/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true}
    });
  }]);

postServices.factory('PostByCategory', ['$resource',
  function($resource){
    return $resource('api/post-by-category/:key', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

postServices.factory('Gallery', ['$resource',
  function($resource){
    return $resource('api/gallery/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true}
    });
  }]);

postServices.factory('Enquiry', ['$resource',
  function($resource){
    return $resource('api/enquiry/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true},
      create: {method:'POST', params:{key:'create'}, isArray:false}
    });
  }]);