(function() {
  'use strict';
    angular.module("weatherApp")
    .service('LocalStorageService', LocalStorageService)

    LocalStorageService.$inject = [];

    function LocalStorageService(){
      this.readHistory = () =>{
        if(localStorage.history){
          return JSON.parse(localStorage.history)
        }
        else return [];
      }

      this.writeHistory = (newZip) => {
        let history = this.readHistory();
        if (history.includes(newZip)) return;
        else {
          history.push(newZip);
          localStorage.history = history;
        }
      }

      this.removeFromHistory = (zip) => {
        let history = this.readHistory();
        const index = history.indexOf(zip);
        hisotry.splice(index, 1);
        localStorage.hisgtory = history;
      }
    }
}());
