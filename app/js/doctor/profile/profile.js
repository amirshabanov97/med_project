angular
	.module('doctorApp')
	.controller('profile',['$stateParams','doctorService', '$scope', function($stateParams, doctorService, $scope) {
		$scope.is_editable = true;
		$scope.is_saved = false;
		$scope.profileData;
		var profileDataOld = {};
		doctorService.getProfile($stateParams.profile_id)
		.then(function(response){
			$scope.profileData = response.data;
			profileDataOld = JSON.stringify(response.data);
		});

		$scope.edit_profile = function() {
			$scope.is_editable = false;
			// profileDataOld = $scope.profileData;÷
		}


// This section for changing Profile Work parameters =====================

		$scope.edit_addNewJob = function() {
			var jobs = $scope.profileData.profile_work_hisctory;
			job = {"status":false,	"location":" ",	"work_name":" "	}
			$scope.profileData.profile_work_hisctory.push(job)
		}
		$scope.edit_delOldJob = function(id) {$scope.profileData.profile_work_hisctory.splice(id,1);}
		$scope.edit_changeJobLocation =  function(id,text) {$scope.profileData.profile_work_hisctory[id].location=text;}
		$scope.edit_changeJobName = function(id,text) {$scope.profileData.profile_work_hisctory[id].work_name=text;}
		$scope.edit_changeJobStatus = function(id) {
			var len = $scope.profileData.profile_work_hisctory.length
			for (var i = 0; i < len; i++) {$scope.profileData.profile_work_hisctory[i].status=false;}
			$scope.profileData.profile_work_hisctory[id].status=true;
		}

// this section for Save Ending ==========================================

		$scope.save_preSaveUser = function() {

			var old = profileDataOld;
			var now = JSON.stringify($scope.profileData);
			if(now!=old){
				console.log("chto za huinya ??")
				$scope.is_saved = true;
			}
		}

		$scope.save_allProfileSave = function() {
			$scope.is_saved = false;
			$scope.is_editable = true;
			profileDataOld = $scope.profileData;
		}
		$scope.cancel_Save = function() {
			$scope.is_saved = false;
			$scope.is_editable = true;
			$scope.profileData = JSON.parse(profileDataOld);
		}

	}]);
