(function() {
  'use strict';
  angular.module("weatherApp")
  .controller("ResultCtrl", ResultCtrl);

  ResultCtrl.$inject = ["$scope", "WeatherService"];

  function ResultCtrl($scope, WeatherService){
    let vm = this;
    vm.state = null;

    $scope.$watch(
      ()=>WeatherService.state,
      (current, prev)=> {
        vm.state = current;
        console.log(vm.state);
      }, true)
  }


}());
