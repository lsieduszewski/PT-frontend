(function() {
    "use strict";

    var module = angular.module("app.dancerDB");

       function fetchBooks(dancerService) {
           return dancerService.getdancers();
       }

       function createNewCouple(dancerService, coupleToCreate) {
                   return dancerService.createCouple(coupleToCreate);
               }

       function controller(dancerService) {

           var model = this;
           model.dancers = [];

           model.$onInit = function() {
               fetchBooks(dancerService).then(function(dancers) {
                   model.dancers = dancers;
               });
           };

                model.newCouple = {
                male: "",
                female: "",
                club: ""
        };

           model.addCouple = function() {



                 createNewCouple(dancerService,model.newCouple).then(function(result) {
                                 model.$router.navigate(["CreateCouple"]);
                             });

           console.log(model.newCouple);
           }




       }




     module.component("createCouple", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/dancerDB/couple-create.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
