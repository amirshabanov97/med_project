angular.module("clientApp").controller("base", ['clientService',"$scope", function(clientService,$scope) {



	clientService.getRequestsList().then(
    function(response) {
			localStorage.setItem("data",JSON.stringify(response.data.data))
    }
  );

	$scope.requestType = '';

	$scope.requestTitles = {
		doctoroncall : 'Вызов врача на дом',
		doctorhour : 'Запись на прием',
		medtest : 'Обследования и анализы',
		procedures : 'Процедуры на дому',
	};

	$scope.changeRequestType = function(type) {

		$root
		if (type=='medtest' || type=='procedures') {
			$scope.tabState = 'what';
		} else {
			$scope.tabState = 'whom';
		}
		$scope.requestType = type;
		$scope.requestTitle = $scope.requestTitles[type];
	};

}]);
