(function() {
  'use strict';
  angular.module("weatherApp")
  .service('WeatherService', WeatherService)

  WeatherService.$inject = ["$http", "LocationService"];

  function WeatherService($http, LocationService){
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
      LocationService.location = null;
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
          LocationService.getLocation(zip)
        },
        err=>{
          this.state = {
            gatheringData: false,
            weatherData: null,
            error: err.data,
            fields: null
          }
          LocationService.location = null;
        }
      )
    }

    this.options = [{
        key: "tempMax",
        name: "Max Temp",
        selected: true
    }, {
        key: "tempAvg",
        name: "Avg temp",
        selected: true
    }, {
        key: "tempMin",
        name: "Min temp",
        selected: true
    }, {
        key: "precip",
        name: "Precipitation",
        selected: true
    }, {
        key: "snowfall",
        name: "Snowfall",
        selected: true
    }, {
        key: "windSpdMax",
        name: "Max Wind Spd",
        selected: true
    }, {
        key: "windSpdAvg",
        name: "Avg Wind Spd",
        selected: true
    }, {
        key: "windSpdMin",
        name: "Min Wind Spd",
        selected: true
    }, {
        key: "dewPtMax",
        name: "Max Dew Pt.",
        selected: true
    }, {
        key: "dewPtAvg",
        name: "Avg Dew Pt.",
        selected: true
    }, {
        key: "dewPtMin",
        name: "Min Dew Pt.",
        selected: true
    }, {
        key: "feelsLikeMax",
        name: "Max \"Feels Like\"",
        selected: true
    }, {
        key: "feelsLikeAvg",
        name: "Avg \"Feels Like\"",
        selected: true
    }, {
        key: "feelsLikeMin",
        name: "Min \"Feels Like\"",
        selected: true
    }]

  }
}());
