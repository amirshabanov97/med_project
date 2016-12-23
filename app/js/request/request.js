angular.module('medApp').controller('request', ['$stateParams', '$state', 'clientService', '$scope', function ($stateParams, $state, clientService, $scope) {
	var filled 		= $('.rate_filled');
	var notFilled 	= $('rate_notfilled');
	var container 	= $('rate_container');
	var countRate 	= notFilled.width() / 38;

	container.on('mouse', function(event) {
		let x = event.offsetX;
		filled.with(x);
	});

	var setRate = function(count) {
		if (count >= countRate) {
			filled.with(2.5 * 38);
			return console.error('Count > %d', countRate);
		} 
		filled.width(count * 38);
	};

	clientService.getRequest($stateParams.request_id).then(function(response) {
		$scope.request = response.data.request;
		$scope.reviews = response.data.reviews;
		console.log($scope.request);
	});

	setRate(3.5);

	$scope.sortType = 'price';
	$scope.reviewSort = function(item) {
		$scope.sortType = item;
	}

}]);