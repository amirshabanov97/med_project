angular.module('clientApp').controller('requests_list', [ 'clientService', '$scope', '$state',  function( clientService, $scope, $state) {
	var data = localStorage.getItem("data");
	console.log(data)
	console.log("asdasd")

	var scope = $scope;
	$scope.requests_list = JSON.parse(data)
	$scope.choosed = false;

	$('#request_sort').dropdown({
		transition: 'drop'
	});

	clientService.getRequestList().then(
		function(response) {
			scope.requests_list = response.data.data
		})
	$scope.currentFilter = false;
	$scope.filters = ['Все', 'По дате', 'Другие заявки', 'Мои заявки'];

	$scope.changeFilter = function(item) {
		$scope.currentFilter = item;
	};

	$scope.removeRequest = function(id) {
		clientService.removeRequest(id).then(
			function(response) {
				console.log(response.data.data);
			}
		);
	};

	$scope.stretch = function(bool, id){
		$scope.id = id;
		if (bool==false){
			$state.go('request', {request_id : 3});
		}else{
			if(angular.element('#object-'+id).hasClass("active_long")){
				angular.element('#object-'+id).removeClass("active_long");
			}else{
				angular.element('#object-'+id).addClass("active_long");
			}
		}
	}

	$scope.check = function(index) {
		if (angular.element('#object-'+$scope.id).hasClass("active_long") && index==$scope.id) {
			return true;
		}
		if(currentFilter==false){
			return true;
		}
	}

	$scope.check_doctor = function(index) {
		if (angular.element('#object-'+$scope.id).hasClass("active_long") && index==$scope.id) {
			return true;
		}
	}


}]);
