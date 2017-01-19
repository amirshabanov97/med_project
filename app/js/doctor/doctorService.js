var app = angular.module('doctorApp');

app.service('doctorService', ['$http', function($http) {
	return {
		getRequestsList: function() {
			return $http.get('/api/doctor/requests_list');
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
		},
		getProfile: function(id) {
			return $http.get('api/doctor/profile/' + id);
		},
		getCalendar: function(id) {
			return $http.get('api/calendar');
		}
	};
}]);
