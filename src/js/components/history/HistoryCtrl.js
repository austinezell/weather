(function() {
  'use strict';

    angular.module("weatherApp")
    .controller("HistoryCtrl", HistoryCtrl)

    HistoryCtrl.$inject = [];
    function HistoryCtrl(){
      let vm = this;

      vm.getCityInfo = getCityInfo;

      function getCityInfo(zip){
        console.log(zio);
      }
    }
}());
