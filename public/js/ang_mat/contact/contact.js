'use strict';

angular.module('mainApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'ang-mat/contact',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$routeParams', 'Enquiry', '$scope', function($routeParams, Enquiry, $scope) {
  var reset = function() {
    $scope.contact = {};
    resetMsgs();
  };

  var resetMsgs = function() {
    $scope.msgs = { info: [], sucess: [], warning: [], danger: [] };
  };

  var send = function(contact) {
    Enquiry.create({key:'create'}, contact, function(item, res) {
      reset();
      $scope.msgs.info.push({text: 'Thanks for getting in touch ' + item.name.first + '!'});
    }, function(err) {
      resetMsgs();
      var errors = err.data.detail.errors;
      for(var i in errors)
        $scope.msgs.danger.push({text: 'An error occurred: ' + errors[i].message});
    });
  };

  $scope.reset = reset;
  $scope.send = send;

  reset();
}]);