angular.module("clientApp").controller("base", ['clientService',"$scope", function(clientService, $scope) {

	clientService.getRequestsList().then(
		function(response) {
			if (!localStorage.getItem('data')) {	
				localStorage.setItem("data", JSON.stringify(response.data.data));
			}
		}
	);

}]);
