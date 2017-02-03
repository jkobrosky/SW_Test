angular.module('sw_test', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './public/views/home.html'
  })

  .otherwise({
    redirectTo: '/'
  })
});
