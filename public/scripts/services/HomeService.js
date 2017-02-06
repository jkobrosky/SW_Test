angular.module('sw_test')

.factory('homeService', function($http, $q) {
  var service = {};

  service.getUsers = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "/api/test/"
    })
    .then(function(response) {
      deferred.resolve(response);
    })
    return deferred.promise;
  }

  service.addUser = function(user) {
    var deferred = $q.defer();
    $http({
      method: "POST",
      url: "/api/test/",
      data: user
    })
    .then(function(response) {
      deferred.resolve(response);
    })
    return deferred.promise;
  }

  return service;

});
