(function() {
  "use strict";

  angular.module("comicApp").factory("Character", Character);

  Character.$inject = ["$http", "$q"];
  const BASE_URI = "http://backend:5000";

  function Character($http, $q) {
    var _list = function() {
      var defer = $q.defer();

      $http.get(`http://localhost:5000/marvel/characters/`).then(
        function success(response) {
          defer.resolve(response);
        },
        function error(err) {
          defer.reject(erro);
        }
      );
      return defer.promise;
    };

    var _getCharacterDetails = function(id) {
      var defer = $q.defer();
      $http.get(`http://localhost:5000/marvel/characters/${id}/comics`).then(
        function success(response) {
          defer.resolve(response);
        },
        function error(err) {
          defer.reject(erro);
        }
      );
      return defer.promise;
    };

    return {
      list: _list,
      getCharacterDetails: _getCharacterDetails
    };
  }
})();
