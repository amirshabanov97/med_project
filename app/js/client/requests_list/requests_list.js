angular.module('clientApp').controller('requests_list', [ '$scope', '$state',  function($scope, $state) {


	$scope.requests_list = JSON.parse(window.localStorage.getItem("data"));
	console.log($scope.requests_list)

	$scope.type = {
		0 : {
			name : 'Вызов врача на дом',
			icon : 'img/icons/doctoroncall_hover.png',
		},
		1 : {
			name : 'Запись на прием',
			icon : 'img/icons/doctorhour_hover.png',
		},
		2 : {
			name : 'Обследования и анализы',
			icon : 'img/icons/medtests_hover.png',
		},
		3 : {
			name : 'Процедуры на дому',
			icon : 'img/icons/procedures_hover.png',
		},
	};

	$scope.choosed = false;
	$scope.currentFilter = true;
	$scope.changeFilter = function(item) {
		console.log($scope.currentFilter);
		$scope.currentFilter = item;
	};
	$scope.removeRequest = function(id) {
		clientService.removeRequest(id).then(
			function(response) {
				console.log(response.data.data);
			}
		);
	};
	$scope.closeAll = function() {
		for (var index in $scope.requests_list) {
			var item = $scope.requests_list[index];
			var id = item.id;
			var card_response = '#response_' + id;
			var card_avatar = '#card_avatar_' + id;
			var request_response = '#request_response_' + id;
			$(card_response).css({
				height: '',
			});
			$(card_avatar).css({
				display: '',
			});
			$(request_response).css({
				display: '',
			});
		}
	}
	$scope.current = false;
	$scope.openResponse = function(openResponse) {
		$scope.closeAll();
		if ($scope.current) {
			$scope.current = false;
			return;
		}
		if (openResponse.status) {
			$scope.current = true;
			var card_response = '#response_' + openResponse.id;
			var card_avatar = '#card_avatar_' + openResponse.id;
			var request_response = '#request_response_' + openResponse.id;
			
			$(card_response).css({
				height: '350px',
			});
			$(card_avatar).css({
				display: 'block',
			});
			$(request_response).css({
				display: 'block',
			});

		}
	}

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
		if($scope.currentFilter==false){
			return true;
		}
	}

	$scope.check_doctor = function(index) {
		if (angular.element('#object-'+$scope.id).hasClass("active_long") && index==$scope.id) {
			return true;
		}
	}


}]);
