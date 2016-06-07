(function() {
  'use strict';
    angular.module("weatherApp")
    .controller("ZipFormCtrl", ZipFormCtrl)

    ZipFormCtrl.$inject = ["WeatherService"];
    function ZipFormCtrl(WeatherService){
      this.zipRegEx = /\d{5}/;
      this.revealed = false;
      this.options = WeatherService.options;

      this.getCityInfo = (zip) => {
        WeatherService.getWeather(zip)
      }

      this.toggleSelected = (option) => {
        option.selected = !option.selected;
      }
    }
}());
