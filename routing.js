var app = angular.module("focusClass", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "components/home/home.html",
        controller: "homeController"
    })
    .when("/about", {
        templateUrl : "components/about/about.html",
        controller: "aboutController"
    })
    .when("/contact", {
        templateUrl : "components/contact/contact.html",
        controller: "contactController"
    });
});


app.run(function($rootScope, $location){
    console.log("run function executed");
    $rootScope.currentPath = $location.path();
});