var app = angular.module('medApp');

app.service('clientService', ['$http', function($http) {
	return {
		getAllRequests: function() {
			return $http.get('/api/requests');
		}
	};
}]);