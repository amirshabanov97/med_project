var app = angular.module('medApp');

app.service('clientService', ['$http', function($http) {
	return {
		getRequestsList: function() {
			return $http.get('/api/requests_list');
		},
		removeRequest: function(id) {
			return $http.delete('/api/request/' + id);
		},
		getRequest: function(id) {
			return $http.get('api/request/' + id);
		},
		getMessages: function() {
			return $http.get('api/messages');
		},
		getChat: function(id) {
			return $http.get('api/chat');
		}
	};
}]);