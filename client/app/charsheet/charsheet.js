angular.module('RPG-Character-Generator')
  .controller('csFormCtrl', function($scope, $http) {
    $scope.name = '';
    $scope.notes = '';
    $scope.result = '';
    $scope.character = {};
    $scope.classes = ['Druid', 'Warrior', 'Paladin', 'Knight', 'Barbarian', 'Sorceror', 'Rogue'];
    $scope.races = ['Dwarf', 'Elf', 'Human', 'Gnome'];
    $scope.traits = ['I would rather a new friend than a new enemy.', 'Nothing can shake my optimistic attitude.', 'Rough living grates on me.', 'I always have a plan for what to do when things go wrong.', 'Thinking is for other people. I prefer action!'];
    $scope.flaws = ['I eat like a pig, and have bad manners.', 'I don\'t like to bathe.', 'I\'ve lost too many friends, and am slow to make new ones.', 'I am horribly awkward in social situations.', 'I... speak... slowly... when talking... to idiots... which... almost... everyone... is... compared... to... me.'];
    $scope.alignments = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'True Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

    $scope.submit = function() {
      $scope.character.name = this.name;
      $scope.character.race = this.selectedRace;
      $scope.character.class = this.selectedClass;
      $scope.character.trait = this.selectedTrait;
      $scope.character.flaw = this.selectedFlaw;
      $scope.character.alignment = this.selectedAlignment;
      $scope.notes = this.notes;
      $scope.name = '';
      $scope.notes = '';
      $scope.result = '' + $scope.character;

      $http({
        method: 'POST',
        url: '/characterlist',
        data: JSON.stringify($scope.character)
      })
    };
  });