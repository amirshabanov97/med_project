angular
	.module('clientApp', ['ui.router', 'ngMask', 'ngStorage'])
	.config(['$httpProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider', function($httpProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
		var clientUrl = 'js/client';
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix("#!");
		$urlRouterProvider.otherwise('/client/base');

		$stateProvider
			.state('base', {
				url: '/client/base',
				controller: 'base',
				templateUrl: clientUrl + '/base/base.html',
			})
			.state('requests_list', {
				url: '/client/request_list',
				controller: 'requests_list',
				templateUrl: clientUrl + '/requests_list/requests_list.html',
			})
			.state('request', {
				url: '/client/request/{request_id}',
				controller: 'request',
				templateUrl: clientUrl + '/request/request.html',
			})
			.state('calendar', {
				url: '/client/calendar',
				controller: 'calendar',
				templateUrl: clientUrl + '/calendar/calendar.html',
			})
			.state('profile', {
				url: '/client/profile/{profile_id}',
				controller: 'profile',
				templateUrl: clientUrl + '/profile/profile.html'
			})
			.state('create_request', {
				url: '/client/{request_type}',
				controller: 'create_request',
				templateUrl: clientUrl + '/create_request/create_request.html'
			})
	}])
	.controller('clientCtrl', ['$localStorage', '$scope', function($localStorage, $scope) {
		var scope = $scope;

		$scope.clientSideStatus = 'menu';

		$scope.changeClientSideStatus = function(status) {
			$scope.clientSideStatus = status;
			clientService.getMessages().then(function(response) {
				console.log(response.data.data);
				scope.messages = response.data.data;
			});
		};

		$scope.enableChat = function(chatId) {
			$scope.clientSideStatus = 'chat';
			console.log(chatId);
			clientService.getChat(chatId).then(function(response) {
				$scope.doctor = response.data.doctor;
				$scope.chat = response.data.chat;
			})
		};
		$scope.chatInput = '';
		$('.chat_textarea').autogrow({ vertical: true, horizontal: false });
	}]);