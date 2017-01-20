angular.module("clientApp").directive('jqdatepicke', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.datepicker({
                minDate: 0,
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
            attrs.$observe('jqdatepicke', function(value) {
            	if(value) {
            		$scope.date = value;
            	}
            });
        }
    };
});


angular.module('clientApp').controller('request', ['userService','$stateParams', '$state', 'clientService', '$scope', function (userService, $stateParams, $state, clientService, $scope) {
	var reviews;
	clientService.getRequest($stateParams.request_id).then(function(response) {
		$scope.request = response.data.request;
		$scope.reviews = response.data.reviews;
		reviews = $scope.reviews;
	});

    $scope.$watch('date', function (value) {
        if (value) {
            $scope.date = value;
            alert($scope.date);
        }
    });


	var filled 		= $('.rate_filled');
	var notFilled 	= $('rate_notfilled');
	var container 	= $('rate_container');
	var countRate 	= notFilled.width() / 38;

	container.on('mouse', function(event) {
		let x = event.offsetX;
		filled.with(x);
	});


	
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
		clientService.removeRequest(id).then(function(response) {
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