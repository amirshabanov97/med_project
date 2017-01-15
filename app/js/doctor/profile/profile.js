angular
	.module('doctorApp')
	.controller('profile',['$stateParams','doctorService', '$scope', function($stateParams, doctorService, $scope) {
		var scope = $scope;
		doctorService.getProfile($stateParams.profile_id).then(function(response) {
			scope.fullname = response.data.profile.fullname;
			scope.birthdate = response.data.profile.birthdate;
			var birthyear = scope.birthdate.substring(6, 10);
			var currentYear = new Date().getFullYear();
			scope.yearsOld = currentYear - birthyear;
			scope.avatar = response.data.profile.avatar;
			scope.telephone = response.data.profile.telephone;
			scope.address = response.data.profile.address;


			scope.description = response.data.description;
			console.log(scope.description);
		});
		$scope.profileStatus = 'client';
		$scope.changeProfileStatus = function(status) {
			$scope.profileStatus = status;
		}

		$scope.profileEditable = false;
		$scope.changeProfileEditable = function() {
			$scope.profileEditable = !$scope.profileEditable;
		}

		$scope.descriptionEditable = false;
		$scope.changeDescriptionEditable = function() {
			$scope.descriptionEditable = !$scope.descriptionEditable;
		}
	}]);