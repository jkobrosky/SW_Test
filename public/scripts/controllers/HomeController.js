angular.module('sw_test')
.controller('HomeController', function($scope, homeService, allUsers) {

  $scope.users = allUsers.data;
  console.log('allUsers ', $scope.users);

  $scope.getUsers = function($http) {
    homeService.getUsers()
    .then(function(response) {
      console.log('response ', response);
      $scope.users = response.data;
    })
    .catch(function(err) {
      throw new Error(err);
    });
  };

  $scope.addUser = function(user) {
    homeService.addUser(user)
    .then(function(response) {
      // Clear the form after response
      $scope.user = {};
      $scope.addUserForm.$setPristine();
      $scope.addUserForm.$setUntouched();

      // Update the users table
      $scope.getUsers();
    })
    .catch(function(err) {
      throw new Error(err);
    });
  };

});
