angular.module('medApp').controller('request', ['clientService', '$scope',  function(clientService, $scope) {
	$('#request_sort').dropdown({
		transition: 'drop'
	})

	$scope.currentFilter = 'Все';
	$scope.filters = ['Все', 'По дате', 'Другие заявки', 'Мои заявки'];
	$scope.changeFilter = function(item) {
		$scope.currentFilter = item;
	}

	var clientAllRequests = clientService.getAllRequests();
	var scope = $scope;
	clientAllRequests.then(function(response) {
		scope.requests = response.data.data;
	});


	// 'use strict';
	// clientService.getAllRequests().then((response) => {
	// 	$scope.requests = response.data.data;
	// })
	// var ctrl = $scope;
	// clientService.getAllRequests(function(data) {
	// 	ctrl.requests = data;
	// })	
}]);