(function() {
  'use strict';

    angular.module("weatherApp")
    .controller("HistoryCtrl", HistoryCtrl)

    HistoryCtrl.$inject = ["HistoryService", "WeatherService", "$scope"];
    function HistoryCtrl(HistoryService, WeatherService, $scope){
      let vm = this;
      vm.zips = null;
      vm.showHistory = false;
      vm.toggle = ()=> vm.showHistory = !vm.showHistory;

      vm.removeZip = removeZip;

      function removeZip(zip){
        HistoryService.removeFromHistory(zip);
      }

      vm.getCityInfo = getCityInfo;

      function getCityInfo(zip){
        WeatherService.getWeather(zip)
      }

      $scope.$watch(
        ()=> HistoryService.history,
        (current, prev)=> vm.zips = current
      )
    }
}());
