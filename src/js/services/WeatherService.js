(function() {
  'use strict';
  angular.module("weatherApp")
  .service('WeatherService', WeatherService)

  WeatherService.$inject = ["$http"];

  function WeatherService($http){
    function generateUrl(zip){
      const today = new Date().toISOString();
      const todayNum = Date.now();
      const threeWeekNum = 1000*60*60*24*7*3; // miliseconds x seconds x minutes x hours x days x weeks
      const threeWeeksAgo = new Date(todayNum - threeWeekNum).toISOString();
      return `https://api.weathersource.com/v1/bc16d3d351883f5aa619/history_by_postal_code.jsonp?callback=test&postal_code_eq=${zip}&country_eq=US&timestamp_between=${threeWeeksAgo},${today}`
    }
    this.getWeather = (zip) => {
      const url = generateUrl(zip);
      console.log(url);
      $http.get(url)
      .then(
        res=> console.log(res),
        err=> console.error(err)
      )
    }
    this.getWeather(22222);
  }
}());
