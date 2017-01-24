angular.module('RPG-Character-Generator')
  .controller('csFormCtrl', function($scope, $http) {
    $scope.name = '';
    $scope.result = '';
    $scope.character = {};
    $scope.classes = ['Druid', 'Warrior', 'Paladin', 'Knight', 'Barbarian', 'Sorceror', 'Rogue'];
    $scope.races = ['Dwarf', 'Elf', 'Human', 'Gnome'];

    $scope.submit = function() {
      $scope.character.name = this.name;
      $scope.character.race = this.selectedRace;
      $scope.character.class = this.selectedClass;
      $scope.name = '';
      $scope.result = '' + $scope.character;

      $http({
        method: 'POST',
        url: '/characterlist',
        data: JSON.stringify($scope.character)
      })
    };
  });