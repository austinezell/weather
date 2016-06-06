(function() {
  'use strict';
  angular.module("weatherApp")
  .service('WeatherService', WeatherService)

  WeatherService.$inject = ["$http"];

  function WeatherService($http){
    this.weatherData = null;
    this.error = null;

    this.getWeather = (zip, options) => {
      const fields = options.filter(option=>option.selected);
      $http.post("/api/", {zip, fields})
      .then(
        res=> {
          this.weatherData = res.data;
          this.error = null;
        },
        err=>{
          this.weatherData = null;
          this.error = err.data
        }
      )
    }
  }
}());
