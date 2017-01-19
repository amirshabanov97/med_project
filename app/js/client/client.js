angular
	.module('clientApp', ['ui.router', 'ngMask', 'ngStorage'])
	.constant('urls', {
		BASE: 'http://192.168.1.110:7000',
		BASE_API: 'http//127.0.0.1:8000/api/v1'
	})
	.config(['$httpProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider', function($httpProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
		var clientUrl = 'js/client';

		$httpProvider.interceptors.push('myInterceptor');
		
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
				url: '/client/requests',
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
			.state('doctoroncall', {
				url: '/client/doctoroncall',
				controller: 'doctoroncall',
				templateUrl: clientUrl + '/doctoroncall/doctoroncall.html'
			})
			.state('doctorhour', {
				url: '/client/doctorhour',
				controller: 'doctorhour',
				templateUrl: clientUrl + '/doctorhour/doctorhour.html'
			})
			.state('medtest', {
				url: '/client/medtest',
				controller: 'medtest',
				templateUrl: clientUrl + '/medtest/medtest.html'
			})
			.state('procedures', {
				url: '/client/procedures',
				controller: 'procedures',
				templateUrl: clientUrl + '/procedures/procedures.html'
			});
	}])
	.controller('clientCtrl', ['urls', 'userService', 'authService', 'clientService' , '$scope', function(urls, userService, authService, clientService, $scope) {
		var scope = $scope;

		function handleRequest(res) {
			console.log(res);
			console.log(res.data);
		}

		$scope.logout = function() {
			userService.logout()
				.then(handleRequest, handleRequest);
		}

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

				// var address = parseInt($('.chat_message').scrollHeight);
				// console.log(address);
				// $('.chat_message').scrollTop(address);
	}])
	.run(['$rootScope', '$location', '$localStorage', 'urls', function($rootScope, $location, $localStorage, urls) {
		$rootScope.$on("$stateChangeStart", function() {
			console.log('stateChanged');
			if($localStorage.token == null) {
				console.log('token null');
				window.location.href = urls.BASE + '/'
			}
		});
	}])
