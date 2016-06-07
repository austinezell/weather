(function() {
  'use strict';

  angular.module("weatherApp")
  .service("LocationService", LocationService)

  LocationService.$inject = ["$http"];

  function LocationService($http){
    this.location = null;
    this.getLocation = (zip) => {
      const url = `http://ziptasticapi.com/${zip}`
      return $http.get(url)
      .then(
        res=>{
          this.location = `${res.data.city}, ${res.data.state} ${zip}, USA`
        }, err=> this.location = null
      )
    }
  }

}());
