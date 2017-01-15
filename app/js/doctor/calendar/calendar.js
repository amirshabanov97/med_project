angular
	.module('doctorApp')
	.controller('calendar', ['doctorService','$scope', function(doctorService, $scope) {
		doctorService.getCalendar().then(function(response) {
			$scope.calendar = response.data.calendar;
			console.log($scope.calendar);
		})
	}]);