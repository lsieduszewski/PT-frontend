(function () {
    "use strict";

    angular.module("app.tournament")
        .factory("tournamentService", tournamentService);

    tournamentService.$inject = ["commonService"];
    function tournamentService(commonService) {

        var URL = "http://localhost:8080/tournamentJudges/";
        var URL4 = "http://localhost:8080/judges/";

        return {
            getJudges: getJudges,
            getjudges: getjudges,
            addTournamentJudge : addTournamentJudge,
        };

        function getJudges() {
            var url = URL + "findAll";
            var errorMsg = "blad przy getJudges";
            var successMsg = "sukces przy getJudges";
            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function getjudges() {
             var url = URL4 + "findAll";
             var errorMsg = "blad przy get judges";
             var successMsg = "sukces przy get judges";
             return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
             });
        }

        function addTournamentJudge(judge) {
            var url = URL + "addJudge";
            var errorMsg = "blad przy addTJudge";
            var successMsg = "sukces przy addTJudge";
            return commonService.post(url, judge, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }



      }
})();
