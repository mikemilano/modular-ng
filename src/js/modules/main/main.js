angular.module('app.main', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'js/modules/main/main.html',
      controller: 'MainCtrl'
    });
  })
  .controller('MainCtrl', function ($scope) {
    $scope.titleText = 'ModularNG';
    $scope.messageText = 'Modular architecture for AngularJS apps';
  });