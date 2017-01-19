angular
	.module('doctorApp')
	.controller('profile',['$stateParams','doctorService', '$scope', function($stateParams, doctorService, $scope) {
		$scope.is_editable = true;
		$scope.profileData;
		doctorService.getProfile($stateParams.profile_id).then(function(response) {
				$scope.profileData = response.data;
				console.log($scope.profileData)
				console.log($scope.profileData.profile.address.city)
				console.log($scope.profileData.profile_work_hisctory)

		});

	}]);
