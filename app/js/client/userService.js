angular
	.module('clientApp')
	.service('userService', ['$http', 'urls', '$localStorage', function($http, urls, $localStorage) {
		return {
			logout: function() {
				return $http.post(urls.BASE_API + '/auth/logout/', {
					token: $localStorage.token,
				});
			},
			// login: function(email, password) {
			// 	return $http.post(urls.BASE_API + '/auth/login/', {
			// 		password: password,
			// 		email: email,
			// 	});
			// },
			// register: function(email, password, name, surname) {
			// 	var full_name = name + ' ' + surname;
			// 	return $http.post(urls.BASE_API + '/auth/register/', {
			// 		password: password,
			// 		email: email,
			// 		full_name : full_name,
			// 	});
			// },
		};
	}]);