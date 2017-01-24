angular.module('RPG-Character-Generator', ['ngRoute'])

  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/charlist/charlist.html',
        controller: ''
      })
      .when('/character_list', {
        templateUrl: 'app/charlist/charlist.html',
        controller: ''
      })
      .when('/character_sheet', {
        templateUrl: 'app/charsheet/charsheet.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });