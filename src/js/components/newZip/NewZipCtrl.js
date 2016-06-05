(function() {
  'use strict';

    angular.module("weatherApp")
    .controller("NewZipCtrl", NewZipCtrl)

    NewZipCtrl.$inject = ["WeatherService"];
    function NewZipCtrl(){
      let vm = this;
      vm.getCityInfo = getCityInfo;
      vm.zipRegEx = /\d{5}/;

      function getCityInfo(zip){

      }
    }
}());
