angular.module('doctorApp').controller('requests_list', ['$stateParams', '$state', 'doctorService', '$scope', function ($stateParams, $state, doctorService, $scope) {
	$scope.sortType = false;
	$scope.chosed = false;
	$scope.is_profiled = false;
	$scope.reviews;
	$scope.pofileData ;
	doctorService.getRequestsList().then(function(response) {
		$scope.reviews = response.data.data;
	});

	doctorService.getProfile(16).then(function(response){
			console.log(response.data)
			$scope.pofileData = response.data
	})



}]);
