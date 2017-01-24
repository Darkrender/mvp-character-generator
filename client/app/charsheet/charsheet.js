angular.module('RPG-Character-Generator')
  .controller('csFormCtrl', function($scope) {
    $scope.classes = ['Druid', 'Warrior', 'Paladin', 'Knight', 'Barbarian', 'Sorceror', 'Rogue'];
    $scope.races = ['Dwarf', 'Elf', 'Human', 'Gnome'];
  });