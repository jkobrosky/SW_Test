angular.module('sw_test', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/home.html',
    controller: 'HomeController'
  })

  .otherwise({
    redirectTo: '/'
  })
});
