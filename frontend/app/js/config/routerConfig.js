(function () {
   'use strict';

   angular
   .module('comicApp')
   .config(routerConfig);

   routerConfig.$inject = ['$routeProvider'];

   function routerConfig($routeProvider) {
      $routeProvider.when("/comicApp", {
         templateUrl: "view/character/index.html",
         controller: "CharacterController",
         controllerAs: 'vm'
      });

      $routeProvider.otherwise({
         redirectTo: "/comicApp"
      });
   }
})();
