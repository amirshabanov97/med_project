angular
	.module('baseApp')
	.service('userService', ['$http', 'urls', 'authService', function($http, urls, authService) {
		return {
			login: function(email, password) {
				return $http.post(urls.	BASE_API + '/auth/login/', {
					password: password,
					email: email,
				});
			},
			register: function(email, password, name, surname) {
				var full_name = name + ' ' + surname;
				return $http.post(urls.BASE_API + '/auth/register/', {
					password: password,
					email: email,
					full_name : full_name,
				});
			},
		};
	}]);