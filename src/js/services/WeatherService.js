(function() {
  'use strict';
  angular.module("weatherApp")
  .service('WeatherService', WeatherService)

  WeatherService.$inject = ["$http"];

  function WeatherService($http){
    this.state = {
      gatheringData: false,
      weatherData: null,
      error: null
    }

    this.getWeather = (zip, options) => {
      const fields = options.filter(option=>option.selected);
      this.state.gatheringData = true;
      $http.post("/api/", {zip, fields})
      .then(
        res=> {
          this.state.gatheringData = false;
          this.state.weatherData = res.data;
          this.state.error = null;
        },
        err=>{
          this.state.gatheringData = false;
          this.state.weatherData = null;
          this.state.error = err.data
        }
      )
    }
  }
}());
