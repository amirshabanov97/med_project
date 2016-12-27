angular.module('medApp', ['ui.router','ngMask']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	
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
}]).controller('medCtrl', ['clientService' , '$scope', function(clientService, $scope) {
	
	var scope = $scope;

	$scope.clientSideStatus = 'menu';
	$scope.changeClientSideStatus = function(status) {
		$scope.clientSideStatus = status;
		clientService.getMessages().then(function(response) {
			console.log(response.data.data);
			scope.messages = response.data.data;
		});
	};


}])