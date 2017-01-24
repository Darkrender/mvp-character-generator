angular.module('RPG-Character-Generator', ['ngRoute'])

  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/charlist/charlist.html',
      })
      .when('/character_list', {
        templateUrl: 'app/charlist/charlist.html',
      })
      .when('/character_sheet', {
        templateUrl: 'app/charsheet/charsheet.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });