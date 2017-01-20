angular.module("doctorApp").controller("base", ["$scope", function($scope) {

	$('.base_modal').click(function() {
		$('.base_modal_content').modal('show');
	});

	$scope.requestType = '';

	$scope.requestTitles = {
		doctoroncall : 'Вызов врача на дом',
		doctorhour : 'Запись на прием',
		medtest : 'Обследования и анализы',
		procedures : 'Процедуры на дому',
	};

	$scope.changeRequestType = function(type) {
		if (type=='medtest' || type=='procedures') {
			$scope.tabState = 'what';
		} else {
			$scope.tabState = 'whom';
		}
		$scope.requestType = type;
		$scope.requestTitle = $scope.requestTitles[type];
	};


	$scope.changeTabState = function(state) {
		$scope.tabState = state;
	}


	$scope.whomTabState = 'me';
	$scope.changeWhomTabState = function(state) {
		$scope.whomTabState = state;
	}

	$scope.whereTabState = 'myAddress';
	$scope.changeWhereTabState = function(state) {
		$scope.whereTabState = state;
	}

	$scope.whenTabState = 'today';
	$scope.changeWhenTabState = function(state) {
		$scope.whenTabState = state;
	}

}]);
