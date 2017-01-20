angular.module("clientApp").controller("base", ["$scope", function($scope) {
	
<<<<<<< HEAD
=======

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

>>>>>>> 6e1fc92d13f4a4a66ad01e42ed0ce500162b80fb
}]);