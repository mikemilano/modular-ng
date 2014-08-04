angular.module('app', [
    'ngRoute',
    'app.main',
    'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/main'
    });
  });