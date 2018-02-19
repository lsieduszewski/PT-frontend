(function() {
    "use strict";

    var module = angular.module("app");

    module.component("frontApp", {
        templateUrl: "/app/front-app.component.html",
        $routeConfig: [
            { path: "/list", component:"dancerList", name: "DancerList" },
            { path: "/createDancer", component:"createDancer", name: "CreateDancer" },
            { path: "/createCouple", component:"createCouple", name: "CreateCouple" },
            { path: "/about", component:"about", name: "About" },
            { path: "/**", redirectTo: ["DancerList", ""] }
        ]
    });

    module.component("about", {
       template: "Program stworzony przez Lukasza Sieduszewskiego </br> e-mail: lsieduszewski@gmail.com, tel. 000 000 000"
    });

}());
