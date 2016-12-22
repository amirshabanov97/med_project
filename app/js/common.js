angular.module('medApp', ["ui.router"]).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("#!");
	$urlRouterProvider.otherwise('base');

	$stateProvider
		.state('base', {
			url: '/base',
			controller: 'base',
			templateUrl: "js/base/base.html",
		})
		.state('request', {
			url: '/request',
			controller: 'request',
			templateUrl: 'js/request/request.html',
		})
}]);