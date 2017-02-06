angular.module('sw_test', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/home.html',
    controller: 'HomeController',
    resolve: {
      allUsers: function($http) {
        return $http.get('/api/test/');
      }
    }
  })

  .otherwise({
    redirectTo: '/'
  })
});
