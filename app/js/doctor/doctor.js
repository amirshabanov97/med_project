angular.module('medApp', ['ui.router','ngMask']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	var clientUrl = 'js/client';
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("#!");
	$urlRouterProvider.otherwise('base');

	$stateProvider
		.state('base', {
			url: '/base',
			controller: 'base',
			templateUrl: clientUrl + '/base/base.html',
		})
		.state('requests_list', {
			url: '/requests',
			controller: 'requests_list',
			templateUrl: clientUrl + '/requests_list/requests_list.html',
		})
		.state('request', {
			url: '/request/{request_id}',
			controller: 'request',
			templateUrl: clientUrl + '/request/request.html',
		})
		.state('calendar', {
			url: '/calendar',
			controller: 'calendar',
			templateUrl: clientUrl + '/calendar/calendar.html',
		})
		.state('profile', {
			url: '/profile/{profile_id}',
			controller: 'profile',
			templateUrl: clientUrl + '/profile/profile.html'
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
