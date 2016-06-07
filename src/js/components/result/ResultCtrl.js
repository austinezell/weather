(function() {
  'use strict';
  angular.module("weatherApp")
  .controller("ResultCtrl", ResultCtrl);

  ResultCtrl.$inject = ["$scope", "WeatherService"];

  function ResultCtrl($scope, WeatherService){
    let vm = this;

    $scope.$watch(
      ()=>WeatherService.weatherData,
      (prev, current)=> {
        console.log(prev, current)
      })
  }


}());
