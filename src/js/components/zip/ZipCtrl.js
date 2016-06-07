import options from "../../config/options";
(function() {
  'use strict';
    angular.module("weatherApp")
    .controller("ZipCtrl", ZipCtrl)

    ZipCtrl.$inject = ["WeatherService"];
    function ZipCtrl(WeatherService){
      this.zipRegEx = /\d{5}/;
      this.revealed = false;
      this.options = options;

      this.getCityInfo = (zip) => {
        WeatherService.getWeather(zip, this.options)
      }

      this.toggleSelected = (option) => {
        option.selected = !option.selected;
      }
    }
}());
