(function () {
    "use strict";

    angular.module("app.dancerDB")
        .factory("dancerService", dancerService);

    dancerService.$inject = ["commonService"];
    function dancerService(commonService) {

        var URL = "http://localhost:8080/dancers/";
        var URL2 = "http://localhost:8080/couples/";

        return {
            getdancers: getdancers,
            createDancer: createDancer,
            createCouple: createCouple,
//            getBookDetails: getBookDetails
        };

        function getdancers() {
            var url = URL + "findAll";
            var errorMsg = "blad przy get dancers";
            var successMsg = "sukces przy get dancers";
            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function createDancer(dancer) {
            var url = URL + "addDancer";
            var errorMsg = "blad przy addDancer";
            var successMsg = "sukces przy addDancer";
            return commonService.post(url, dancer, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function createCouple(couple) {
                    var url = URL2 + "addCouple";
                    var errorMsg = "blad przy addCouple";
                    var successMsg = "sukces przy addCouple";
                    return commonService.post(url, couple, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                    });
                }


//
//        function getBookDetails(id) {
//            var url = URL + "getBookDetails/" + id;
//            var errorMsg = "blad przy get bookDetails";
//            var successMsg = "sukces przy get bookDetails";
//            return commonService.get(url, id,  successMsg, errorMsg).then(function (result) {
//                 return result ? result : [];
//                    });
//                }
    }
})();
