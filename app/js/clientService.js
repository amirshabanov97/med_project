var app = angular.module('medApp');

app.service('clientService', ['$http', function($http) {
	return {
		getAllRequests: function() {
			return $http.get('/api/requests_list');
		},
		removeRequest: function(id) {
			return $http.delete('/api/request/' + id);
		}
	};
}]);