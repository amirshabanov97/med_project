angular
	.module('clientApp')
	.service('userService', ['$http', 'urls', '$localStorage', function($http, urls, $localStorage) {
		return {
			logout: function() {
				return $http.post(urls.BASE_API + '/auth/logout/', {});
			},
		};
	}]);
