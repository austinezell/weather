(function() {
  'use strict';
    angular.module("weatherApp")
    .directive("waNewZipForm", newZipForm)

    function newZipForm(){
      const directive = {
        link,
        templateUrl: "./templates/newZip.html",
        restrict: 'E',
        controller: "NewZipCtrl",
        controllerAs: "nz",
        bindToController: true
      }

      return directive;

      function link(scope, element, attrs){

      }
    }

}());
