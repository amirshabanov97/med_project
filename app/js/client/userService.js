angular
	.module('clientApp')
	.service('userService', ['$http', 'urls', '$localStorage', function($http, urls, $localStorage) {
		return {
			logout: function() {
				return $http.post(urls.BASE_API + '/auth/logout/', {});
			},
			request: function(time_from, time_to, price_from, price_to, comment, city, address) {
				return $http.post(urls.BASE_API + /request/, {
					client: 17,
					time_from: time_from,
					time_to: time_to,
					price_from: price_from,
					price_to: price_to,
					specialities: [1, 2],
					comment: comment,
					city: 1,
					address: address,
					// type: 
				})
			}
		};
	}]);
