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
		$scope.edit_profile = function() {
			$scope.is_editable = false;
			console.log("troubles")
		}
		$scope.edit_addNewJob = function() {
			var jobs = $scope.profileData.profile_work_hisctory;
			job = {"status":false,	"location":"",	"work_name":""	}
			$scope.profileData.profile_work_hisctory.push(job)
		}
		$scope.edit_delOldJob = function(id) {
			$scope.profileData.profile_work_hisctory.splice(id,1);
		}
		$scope.edit_changeJobLocation =  function(id,text) {
			$scope.profileData.profile_work_hisctory[id].location=text;
		}
		$scope.edit_changeJobName = function(id,text) {
			$scope.profileData.profile_work_hisctory[id].work_name=text;
		}
		$scope.edit_changeJobStatus = function(id) {
			var len = $scope.profileData.profile_work_hisctory.length
			for (var i = 0; i < len; i++) {
				$scope.profileData.profile_work_hisctory[i].status=false;
			}
			$scope.profileData.profile_work_hisctory[id].status=true;
		}
		$scope.save_profile = function() {
			$scope.is_editable = true;
		}

	}]);
