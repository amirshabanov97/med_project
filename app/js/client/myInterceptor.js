angular
	.module('clientApp')
	.factory('myInterceptor', ['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
		return {
			request: function(config) {
				return config
			},
			response: function(res) {
				return res
			}
		};
	}])