(function() {
  'use strict';

    angular.module("weatherApp")
    .controller("NewZipCtrl", NewZipCtrl)

    NewZipCtrl.$inject = [];
    function NewZipCtrl(){
      let vm = this;

      vm.getCityInfo = getCityInfo;

      function getCityInfo(zip){

      }
    }
}());
