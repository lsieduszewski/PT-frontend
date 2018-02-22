(function() {
    "use strict";

    var module = angular.module("app");

    module.component("frontApp.tournament", {
        templateUrl: "/app/tournament.component.html",
        $routeConfig: [
            { path: "/tournamentJudgeList", component:"tournamentJudgeList", name: "TournamentJudgeList" },
            { path: "/createTournamentJudge", component:"createTournamentJudge", name: "CreateTournamentJudge" },
//            { path: "/coupleList", component:"coupleList", name: "CoupleList" },
//            { path: "/createCouple", component:"createCouple", name: "CreateCouple" },
//            { path: "/clubList", component:"clubList", name: "ClubList" },
//            { path: "/createClub", component:"createClub", name: "CreateClub" },
//            { path: "/judgeList", component:"judgeList", name: "JudgeList" },
//            { path: "/createJudge", component:"createJudge", name: "CreateJudge" },
//            { path: "/about", component:"about", name: "About" },
//            { path: "./**", redirectTo: ["DancerList", ""] }
        ]
    });


}());
