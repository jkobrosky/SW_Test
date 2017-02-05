angular.module('sw_test')
.controller('HomeController', function($scope, homeService) {

  $scope.addUser = function(user) {
    console.log('user ', user);
    homeService.addUser(user)
    .then(function(response) {
      // Clear the form after response
      $scope.user = {};
      $scope.addUserForm.$setPristine();
      $scope.addUserForm.$setUntouched();
    })
    .catch(function(err) {
      throw new Error(err);
    });
  }

});
