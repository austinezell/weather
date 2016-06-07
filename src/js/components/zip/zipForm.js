(function() {
  'use strict';
    angular.module("weatherApp")
    .directive("waZipForm", zipForm)

    function zipForm(){
      const directive = {
        templateUrl: "./templates/zipForm.html",
        restrict: 'E',
        controller: "ZipFormCtrl",
        controllerAs: "zip",
        bindToController: true
      }

      return directive;
    }

}());
