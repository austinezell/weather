(function() {
  'use strict';
    angular.module("weatherApp")
    .directive("waHistory", history)

    function history(){
      const directive = {
        link,
        templateUrl: "./templates/history.html",
        restrict: 'E',
        controller: "HistoryCtrl",
        controllerAs: "history",
        bindToController: true
      }

      return directive;

      function link(scope, element, attrs){

      }
    }

}());
