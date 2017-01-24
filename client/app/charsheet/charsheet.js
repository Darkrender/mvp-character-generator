angular.module('RPG-Character-Generator')
  .controller('csFormCtrl', function($scope) {
    $scope.name = '';
    $scope.character = [];
    $scope.classes = ['Druid', 'Warrior', 'Paladin', 'Knight', 'Barbarian', 'Sorceror', 'Rogue'];
    $scope.races = ['Dwarf', 'Elf', 'Human', 'Gnome'];

    $scope.submit = function() {
      $scope.character.push(this.name);
      $scope.character.push(this.selectedClass);
      $scope.character.push(this.selectedRace);
      $scope.name = '';
    };
  });