(function() {
    "use strict";

    var module = angular.module("app", ["ngComponentRouter", "ngAnimate", "app.common", "app.dancerDB"]);
    module.value("$routerRootComponent", "frontApp");

}());
