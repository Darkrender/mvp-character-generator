angular.module('RPG-Character-Generator')
  .controller('charListCtrl', function($scope, $http) {
    $scope.characters = [];

    $scope.getAll = function() {
      $http({
        method: 'GET',
        url: '/characterlist'
      })
      .then(function(characters) {
        characters.data.forEach(function(char) {
          $scope.characters.push(char);
        });
      });
    };
  })