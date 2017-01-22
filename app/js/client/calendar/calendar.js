angular
	.module('clientApp')
	.controller('calendar', ['clientService','$scope', '$state', 
		function(clientService, $scope, $state) {
		clientService.getCalendar().then(function(response) {
			$scope.calendar = response.data.calendar;
			console.log($scope.calendar);
		})

		$scope.goToRequests = function() {
			$state.go('requests_list', {
				data: {
					openwindow: true
				}
			}, {
				notify: true
			})
		}
	}]);