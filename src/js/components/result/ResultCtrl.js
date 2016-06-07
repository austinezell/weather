(function() {
  'use strict';
  angular.module("weatherApp")
  .controller("ResultCtrl", ResultCtrl);

  ResultCtrl.$inject = ["$scope", "WeatherService", "LocationService"];

  function ResultCtrl($scope, WeatherService, LocationService){
    let vm = this;
    vm.state = null;
    vm.location = null;

    $scope.$watch(
      ()=>WeatherService.state,
      (current, prev)=> {
        vm.state = current;
      }, true
    )

    $scope.$watch(
      ()=> LocationService.location,
      (current, prev) => vm.location = current
    )
  }


}());
