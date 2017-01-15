angular.module('doctorApp', ['ui.router','ngMask']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	var clientUrl = 'js/doctor';
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("#!");
	$urlRouterProvider.otherwise('/doctor/base');

	$stateProvider
		.state('base', {
			url: '/doctor/base',
			controller: 'base',
			templateUrl: clientUrl + '/base/base.html',
		})
		.state('requests_list', {
			url: '/doctor/requests',
			controller: 'requests_list',
			templateUrl: clientUrl + '/requests_list/requests_list.html',
		})
		.state('request', {
			url: '/doctor/request/{request_id}',
			controller: 'request',
			templateUrl: clientUrl + '/request/request.html',
		})
		.state('calendar', {
			url: '/doctor/calendar',
			controller: 'calendar',
			templateUrl: clientUrl + '/calendar/calendar.html',
		})
		.state('profile', {
			url: '/doctor/profile/{profile_id}',
			controller: 'profile',
			templateUrl: clientUrl + '/profile/profile.html'
		})
}]).controller('doctorCtrl', ['doctorService' , '$scope', function(doctorService, $scope) {

	var scope = $scope;

	$scope.clientSideStatus = 'menu';
	$scope.changeClientSideStatus = function(status) {
		$scope.clientSideStatus = status;
		doctorService.getMessages().then(function(response) {
			console.log(response.data.data);
			scope.messages = response.data.data;
		});
	};
	$scope.enableChat = function(chatId) {
		$scope.clientSideStatus = 'chat';
		console.log(chatId);
		doctorService.getChat(chatId).then(function(response) {
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
