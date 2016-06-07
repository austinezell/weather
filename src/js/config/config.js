(function() {
  'use strict';

  angular.module("weatherApp")
  .config(colorConfig)

  colorConfig.$inject = ["$mdThemingProvider"]

  function colorConfig($mdThemingProvider){

    $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('deep-purple');
  }
}());
