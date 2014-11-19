'use strict';

var postServices = angular.module('postServices', ['ngResource']);

postServices.factory('Post', ['$resource',
  function($resource){
    return $resource(host + 'api/post/:slug', {}, {
      query: {method:'GET', params:{slug:'list'}, isArray:true}
    });
  }]);

postServices.factory('PostCategory', ['$resource',
  function($resource){
    return $resource(host + 'api/post-category/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true}
    });
  }]);

postServices.factory('PostByCategory', ['$resource',
  function($resource){
    return $resource(host + 'api/post-by-category/:key', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

postServices.factory('Gallery', ['$resource',
  function($resource){
    return $resource(host + 'api/gallery/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true}
    });
  }]);

postServices.factory('Enquiry', ['$resource',
  function($resource){
    return $resource(host + 'api/enquiry/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true},
      create: {method:'POST', params:{key:'create'}, isArray:false}
    });
  }]);

postServices.factory('EnquiryType', ['$resource',
  function($resource){
    return $resource(host + 'api/enquiry_type/:key', {}, {
      query: {method:'GET', params:{key:'list'}, isArray:true}
    });
  }]);