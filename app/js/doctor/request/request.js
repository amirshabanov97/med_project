angular.module('doctorApp').controller('request', ['$stateParams', '$state', 'doctorService', '$scope', function ($stateParams, $state, doctorService, $scope) {

	$scope.chosed = false;
	$scope.is_profiled = false;
	$scope.reviews;
	$scope.pofileData ;
	doctorService.getRequestsList().then(function(response) {
		$scope.reviews = response.data.data;
	});

	doctorService.getProfile().then(function(response){
			$scope.pofileData = response.data.data
	})

	var filled 		= $('.rate_filled');
	var notFilled 	= $('rate_notfilled');
	var container 	= $('rate_container');
	var countRate 	= notFilled.width() / 38;

	container.on('mouse', function(event) {
		let x = event.offsetX;
		filled.with(x);
	});



//================ SUBTAB CONTENT END BLOCK ================
	$scope.changeTabState = function(state) {
		$scope.tabState = state; // states : 'doctoroncall' 'doctorhour' 'procedures' 'medtest'
	};

	$scope.whomTabState = 'me';  // states : 'me' 'other'
	$scope.changeWhomTabState = function(state) {
		$scope.whomTabState = state;
	};

	$scope.whereTabState = 'myAddress'; // states : 'myAddress' 'otherAddress'
	$scope.changeWhereTabState = function(state) {
		$scope.whereTabState = state;
	};

	$scope.whenTabState = 'today'; // states : 'today' 'tommorow' 'week'
	$scope.changeWhenTabState = function(state) {
		$scope.whenTabState = state;
	};
//================ SUBTAB CONTENT END BLOCK ================


//================ CARD REQUESTS END BLOCK ================
	$scope.editRequest = function(id) {
		if ($scope.request.requesttype=='medtest' || $scope.request.requesttype=='procedures') {
			$scope.tabState = 'what';
		} else {
			$scope.tabState = 'whom';
		}
		$scope.requestTitle = $scope.request.title;
		$scope.requestType = $scope.request.requesttype;
		$('.request_modal_content').modal('show');
	};

	$scope.removeRequest = function(id) {
		doctorService.removeRequest(id).then(function(response) {
			console.log(response.data.data);
		});
	};
//================ CARD REQUESTS END BLOCK ================


	var setRate = function(count) {
		if (count >= countRate) {
			filled.with(2.5 * 38);
			return console.error('Count > %d', countRate);
		}
		filled.width(count * 38);
	};

	setRate(3.5);

	$scope.sortType = 'price';
	$scope.reviewSort = function(item) {
		$scope.sortType = item;
	}

}]);
