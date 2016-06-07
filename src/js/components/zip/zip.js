(function() {
  'use strict';
    angular.module("weatherApp")
    .directive("waZipForm", zipForm)

    function zipForm(){
      const directive = {
        templateUrl: "./templates/zip.html",
        restrict: 'E',
        controller: "ZipCtrl",
        controllerAs: "zip",
        bindToController: true
      }

      return directive;
    }

}());
