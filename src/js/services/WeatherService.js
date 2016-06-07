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

    function sortByKey(a, b){
      return a.key > b.key ? 1 : -1
    }

    function generateOrderedData(datum){
      const orderedKeys = Object.keys(datum).sort();
      let data = [], timestamp;
      for (let key of orderedKeys){
        if (key=== "timestamp") timestamp = new Date(datum[key]);
        else data.push(datum[key]);
      }
      return {data, timestamp};
    }

    this.getWeather = (zip, options) => {
      const fields = options.filter(option=>option.selected);
      this.state.gatheringData = true;
      $http.post("/api/", {zip, fields})
      .then(
        res=> {
          this.state = {
            gatheringData: false,
            weatherData: res.data.map(generateOrderedData),
            error: null,
            fields: fields.sort(sortByKey).map(field=>field.name)
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
