var app = angular.module("medApp", ["ui.router"]);

app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("!");
	$urlRouterProvider.otherwise('/base');
	$stateProvider
		.state("base", {
			url: "/base",
			templateUrl: "template/base.html",
			controller: "baseCtrl"

		})
		.state("request", {
			url: "/request",
			templateUrl: "template/request.html",
			controller: ""
		});

}]);