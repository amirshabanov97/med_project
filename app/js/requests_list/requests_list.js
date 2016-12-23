angular.module('medApp').controller('requests_list', ['clientService', '$scope',  function(clientService, $scope) {

	var scope = $scope;

	clientService.getAllRequests().then(function(response) {
		scope.requests_list = response.data.data;
	});
	
	$('#request_sort').dropdown({
		transition: 'drop'
	});


	$scope.currentFilter = 'Все';
	$scope.filters = ['Все', 'По дате', 'Другие заявки', 'Мои заявки'];

	$scope.changeFilter = function(item) {
		$scope.currentFilter = item;
	};

	$scope.remove_request = function(id) {
		clientService.removeRequest(id).then(function(response) {
			console.log(response.data.data);
		});
	};

}]);