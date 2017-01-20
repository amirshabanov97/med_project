angular.module('doctorApp', ['ui.router','ngMask']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	var doctorUrl = 'js/doctor';
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("#!");
	$urlRouterProvider.otherwise('/doctor/requests_list');

	$stateProvider
		.state('requests_list', {
			url: '/doctor/requests_list',
			controller: 'requests_list',
			templateUrl: doctorUrl + '/requests_list/requests_list.html',
		})
		.state('request', {
			url: '/client/request/{request_id}',
			controller: 'requests',
			templateUrl: doctorUrl + '/request/request.html',
		})
		.state('calendar', {
			url: '/doctor/calendar',
			controller: 'calendar',
			templateUrl: doctorUrl + '/calendar/calendar.html',
		})
		.state('service_payment', {
			url: '/doctor/service_payment',
			controller: 'service_payment',
			templateUrl: doctorUrl + '/service_payment/service_payment.html',
		})
		.state('profile', {
			url: '/doctor/profile/{profile_id}',
			controller: 'profile',
			templateUrl: doctorUrl + '/profile/profile.html'
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
