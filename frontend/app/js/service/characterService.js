(function () {
   'use strict';

   angular.module('comicApp').factory('Character', Character);

   Character.$inject = ['$http', '$q'];

   function Character($http, $q){
      var _key =  'd9b3f2487274a5b08a149d1a9772a48f';
      var _searchWeatherByCity = function(city){
         var defer = $q.defer();
         var params = {
            q: city,
            units: 'metric',
            APPID: _key
         }
         $http.get('http://api.openweathermap.org/data/2.5/weather', {params}).then(
            function success(response){
               defer.resolve(response);
            },
            function error(err){
               defer.reject(erro);
            }
         );
         return defer.promise;
      }

      var _list = function(){
         var defer = $q.defer();
         $http.get('http://localhost:5000/marvel/characters/').then(
            function success(response){
               defer.resolve(response);
            },
            function error(err){
               defer.reject(erro);
            } 
         );
         return defer.promise;
      }

      var _getCharacterDetails = function(id){
         console.log('aquiiii  ' + id);
         var defer = $q.defer();
         $http.get(`http://localhost:5000/marvel/characters/${id}/comics`).then(
            function success(response){
               defer.resolve(response);
            },
            function error(err){
               defer.reject(erro);
            } 
         );
         return defer.promise;
      }

      return{
         searchWeatherByCity: _searchWeatherByCity,
         list: _list,
         getCharacterDetails: _getCharacterDetails
      };
   }
})();
