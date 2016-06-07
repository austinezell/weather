import options from "../../config/options";
(function() {
  'use strict';
    angular.module("weatherApp")
    .controller("ZipCtrl", ZipCtrl)

    ZipCtrl.$inject = ["WeatherService"];
    function ZipCtrl(WeatherService){
      let vm = this;

      vm.getCityInfo = getCityInfo;
      vm.toggleSelected = toggleSelected;
      vm.zipRegEx = /\d{5}/;
      vm.revealed = false;
      vm.options = options;

      function getCityInfo(zip){
        WeatherService.getWeather(zip, vm.options)
      }

      function toggleSelected(option){
        option.selected = !option.selected;
      }
    }
}());
