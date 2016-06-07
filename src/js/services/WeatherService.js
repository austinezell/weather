(function() {
  'use strict';
  angular.module("weatherApp")
  .service('WeatherService', WeatherService)

  WeatherService.$inject = ["$http"];

  function WeatherService($http){
    this.state = {
      gatheringData: false,
      weatherData: null,
      error: null,
      fields: null
    }

    function generateOrderedData(datum){
      const orderedKeys = Object.keys(datum).sort();
      let data = [], timestamp;
      for (let key of orderedKeys){
        if (key === "timestamp") timestamp = new Date(datum[key]);
        else data.push(datum[key]);
      }
      return {data, timestamp};
    }

    this.getWeather = (zip, options) => {
      this.state.gatheringData = true;
      const fields = options.filter(option=>option.selected);
      $http.post("/api/", {zip, fields})
      .then(
        res=> {
          this.state = {
            gatheringData: false,
            weatherData: res.data.map(generateOrderedData),
            error: null,
            fields: fields.sort((a,b)=>a.key > b.key ? 1 : -1).map(field=>field.name)
          }
        },
        err=>{
          this.state = {
            gatheringData: false,
            weatherData: null,
            error: err,
            fields: null
          }
        }
      )
    }
  }
}());
