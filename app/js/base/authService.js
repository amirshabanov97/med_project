angular
	.module('baseApp')
	.service('authService',['$localStorage', function($localStorage) {
		return {
			saveToken: function(token) {
				return $localStorage.token = token;
			},
			getToken: function() {
				return $localStorage.token;
			},
			clearToken: function() {
				return delete $localStorage.token;
			},
		}
	}])