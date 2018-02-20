(function() {
    "use strict";

    var module = angular.module("app", ["ngComponentRouter", "ngAnimate", "app.common", "app.centralDB"]);
    module.value("$routerRootComponent", "frontApp");

}());
