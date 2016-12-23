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
		.state('requests_list', {
			url: '/requests_list',
			controller: 'requests_list',
			templateUrl: 'js/requests_list/requests_list.html',
		})
		.state('request', {
			url: '/request/{request_id}',
			controller: 'request',
			templateUrl: 'js/request/request.html',
		})
}]);