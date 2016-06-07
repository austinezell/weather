(function() {
  'use strict';
    angular.module("weatherApp")
    .directive("waHistory", history)

    function history(){
      const directive = {
        templateUrl: "./templates/history.html",
        restrict: 'E',
        controller: "HistoryCtrl",
        controllerAs: "history",
        bindToController: true
      }

      return directive;
    }

}());
