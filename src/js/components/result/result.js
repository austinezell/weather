(function() {
  'use strict';
  angular.module("weatherApp")
  .directive("waResultTable", waResultTable)

  function waResultTable(){
    const directive = {
      link,
      templateUrl: "./templates/result.html",
      restrict: 'E',
      controller: "ResultCtrl",
      controllerAs: "result",
      bindToController: true
    }

    function link(scope, element, attrs) {

    }

    return directive;

  }
}());
