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

      this.history = this.readHistory();

      this.addNewZip = (zip) => {
        if (this.history.includes(zip)) return;
        else {
          this.history.push(zip);
          localStorage.history = JSON.stringify(this.history);
        }
      }

      this.removeFromHistory = (zip) => {
        const index = this.history.indexOf(zip);
        this.history.splice(index, 1);
        localStorage.history = JSON.stringify(this.history);
      }
    }
}());
