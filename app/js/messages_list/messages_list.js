angular.module('medApp').controller('messages_list', ['$scope','clientService', function($scope, clientService) {
	var scope = $scope;
	clientService.getMessages().then(function(response) {
		scope.messages = response.data.data;
	});
}])