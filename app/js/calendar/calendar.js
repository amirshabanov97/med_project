angular
	.module('medApp')
	.controller('calendar', ['clientService','$scope', function(clientService, $scope) {
		clientService.getCalendar().then(function(response) {
			$scope.calendar = response.data.calendar;
			console.log($scope.calendar);
		})
	}]);