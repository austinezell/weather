(function() {
  'use strict';
  angular.module("weatherApp")
  .directive("waResultTable", waResultTable)

  function waResultTable(){
    const directive = {
      templateUrl: "./templates/result.html",
      restrict: 'E',
      controller: "ResultCtrl",
      controllerAs: "result",
      bindToController: true
    }

    return directive;
  }
}());
