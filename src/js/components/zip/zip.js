(function() {
  'use strict';
    angular.module("weatherApp")
    .directive("waZipForm", zipForm)

    function zipForm(){
      const directive = {
        link,
        templateUrl: "./templates/zip.html",
        restrict: 'E',
        controller: "ZipCtrl",
        controllerAs: "zip",
        bindToController: true
      }

      function link(scope, element, attrs){

      }

      return directive;
    }

}());
