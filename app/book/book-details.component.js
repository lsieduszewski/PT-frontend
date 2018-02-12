(function () {

    var module = angular.module("app.book");
//
//                var controller = function() {
//                        var model = this;
//
//                        model.$routerOnActivate = function(next, previous) {
//                            model.id = next.params.id;
//                        };
//
//                    };

           function controller(bookService) {

            var id;
            var model = this;
            model.books = [];

            model.$onInit = function() {

            model.$routerOnActivate = function(next, previous) {
            model.books.id = next.params.id;
            id = (parseInt(String(model.books["id"])));

            bookService.getBookDetails(id).then(function(books) {
                    model.books = books;
                });

            };

            };

        }



    module.component("bookDetails", {
        templateUrl: "/app/book/book-details.component.html",
        controllerAs: "model",
        controller: ["bookService", controller],
        $routeConfig: [
            { path: "/", component:"bookOverview", name:"Overview"}
        ]
    });

    module.component("bookOverview", {
        template: ""
    });


} ());
