angular
	.module('doctorApp')
	.controller('profile',['$stateParams','doctorService', '$scope', function($stateParams, doctorService, $scope) {
		
		doctorService.getProfile($stateParams.profile_id).then(function(response) {
			console.log(response.data)

		});

	}]);
