angular.module('medApp').controller('request', ['$stateParams', '$state', 'clientService', '$scope', function ($stateParams, $state, clientService, $scope) {

	var filled 		= $('.rate_filled');
	var notFilled 	= $('rate_notfilled');
	var container 	= $('rate_container');
	var countRate 	= notFilled.width() / 38;

	container.on('mouse', function(event) {
		let x = event.offsetX;
		filled.with(x);
	});

	// $('.request_modal').click(function() {
	// 	$('.request_modal_content').modal('show');
	// });
	$scope.requestModal = function() {
		console.log($scope.request.requesttype);
		if ($scope.request.requesttype=='medtest' || $scope.request.requesttype=='procedures') {
			$scope.tabState = 'what';
		} else {
			$scope.tabState = 'whom';
		}
		$scope.requestTitle = $scope.request.title;
		$scope.requestType = $scope.request.requesttype;
		$('.request_modal_content').modal('show');
	}

//================ SUBTAB CONTENT END BLOCK ================
	$scope.changeTabState = function(state) {
		$scope.tabState = state; // states : 'doctoroncall' 'doctorhour' 'procedures' 'medtest' 
	}

	$scope.whomTabState = 'me';  // states : 'me' 'other'
	$scope.changeWhomTabState = function(state) {
		$scope.whomTabState = state;
	}

	$scope.whereTabState = 'myAddress'; // states : 'myAddress' 'otherAddress'
	$scope.changeWhereTabState = function(state) {
		$scope.whereTabState = state;
	}

	$scope.whenTabState = 'today'; // states : 'today' 'tommorow' 'week'
	$scope.changeWhenTabState = function(state) {
		$scope.whenTabState = state;
	}
//================ SUBTAB CONTENT END BLOCK ================

	$scope.removeRequest = function(id) {
		clientService.removeRequest(id).then(function(response) {
			console.log(response.data.data);
		});
	};

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