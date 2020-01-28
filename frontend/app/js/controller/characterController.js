(function() {
  "use strict";

  angular
    .module("comicApp")
    .controller("CharacterController", CharacterController);

  CharacterController.$inject = ["Character"]; //service

  function CharacterController(Character) {
    var vm = this;

    (vm.list = function() {
      Character.list().then(function success(response) {
        vm.characteres = angular.copy(response.data);
      });
    }),
      (vm.getCharacterDetails = function(id) {
        console.log(id);
        Character.getCharacterDetails(id).then(function success(response) {
          vm.details = angular.copy(response.data);
        });
      });
  }
})();
