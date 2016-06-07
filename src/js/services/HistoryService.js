(function() {
  'use strict';
    angular.module("weatherApp")
    .service('HistoryService', HistoryService)

    HistoryService.$inject = [];

    function HistoryService(){
      this.readHistory = () =>{
        if(localStorage.history){
          return JSON.parse(localStorage.history)
        }
        else return [];
      }

      this.writeHistory = (zip) => {
        let history = this.readHistory();
        if (history.includes(zip)) return;
        else {
          history.push(zip);
          localStorage.history = JSON.stringify(history);
        }
      }

      this.removeFromHistory = (zip) => {
        let history = this.readHistory();
        const index = history.indexOf(zip);
        hisotry.splice(index, 1);
        localStorage.hisgtory = JSON.stringify(history);
      }
    }
}());
