angular.module('doctorApp').controller('requests_list', ['doctorService', '$scope',  function(doctorService, $scope) {

	var scope = $scope;

	doctorService.getRequestsList().then(function(response) {
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

	$scope.removeRequest = function(id) {
		doctorService.removeRequest(id).then(function(response) {
			console.log(response.data.data);
		});
	};

}]);