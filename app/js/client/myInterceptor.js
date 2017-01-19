angular
	.module('clientApp')
	.factory('myInterceptor', ['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
		return {
			request: function(config) {
				config.headers['Authorization'] = 'Token ' + $localStorage.token;
				return config;
			},
			response: function(response) {
				console.log(response.status, response.statusText);
				return response;
			},
			responseError: function(rejection) {
				// if (rejection.status==403) {
				// 	$window.location = 
				// }
				return rejection;
			},
		};
	}])