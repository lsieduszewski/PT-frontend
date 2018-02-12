(function () {
    "use strict";

    angular.module("app.book")
        .factory("bookService", bookService);

    bookService.$inject = ["commonService"];
    function bookService(commonService) {

        var URL = "http://localhost:8080/books/";

        return {
            getbooks: getbooks,
            createBook: createBook,
            getBookDetails: getBookDetails
        };

        function getbooks() {
            var url = URL + "all";
            var errorMsg = "blad przy get books";
            var successMsg = "sukces przy get books";
            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function createBook(book) {
            var url = URL + "saveAll";
            var errorMsg = "blad przy create book";
            var successMsg = "sukces przy create book";
            return commonService.post(url, book, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function getBookDetails(id) {
            var url = URL + "getBookDetails/" + id;
            var errorMsg = "blad przy get bookDetails";
            var successMsg = "sukces przy get bookDetails";
            return commonService.get(url, id,  successMsg, errorMsg).then(function (result) {
                 return result ? result : [];
                    });
                }
    }
})();
