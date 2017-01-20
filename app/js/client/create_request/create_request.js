// angular.module("clientApp").directive('jqdatepicker', function() {
// 	 return {
// 		  restrict: 'A',
// 		  scope: {
// 		  	date: '=method',
// 		  },
// 		  link: function (scope, element, attrs, date) {
// 				var updateModel = function(dateText){
// 					scope.date({picked:dateText});
// 					scope.$apply(function(){
// 						ngModel.$setViewValue(dateText);
// 					});
// 				};
// 				var options = {
// 					dateFormat: "dd/mm/yy",
// 				   minDate: 0,
// 					onSelect: function(dateText){
// 						updateModel(dateText);
// 					}
// 				};
// 				element.datepicker(options);
// 		  }
// 	 };
// });

angular.module("clientApp").directive('selectmorn', function() {
	return{
		restrict: 'A',
		link: function ($scope, element, attrs) {
			$(element).click(function() {
				$('.morn_check input').prop("checked", !$('.morn_check input').prop("checked"));
			})
		}
	}
});

angular.module("clientApp").directive('selectlunch', function() {
	return{
		restrict: 'A',
		link: function ($scope, element, attrs) {
			$(element).click(function() {
				$('.lunch_check').find('input[type=checkbox]').prop("checked", !$('.lunch_check').find('input[type=checkbox]').prop("checked"));
			})
		}
	}
});

angular.module("clientApp").directive('selecteven', function() {
	return{
		restrict: 'A',
		link: function ($scope, element, attrs) {
			$(element).click(function() {
				$('.even_check input').prop("checked", !$('.even_check input').prop("checked"));
			})
		}
	}
});

angular.module("clientApp").controller('create_request', ['userService','$state', '$scope', function(userService, $state, $scope) {
	$('.datepicker').datepicker({
		dateFormat: "dd/mm/yy",
	   minDate: 0,
		onSelect: function(dateText){
			console.log(dateText);
		}
	})

	console.log($scope.datee);

	$scope.request_titles = {
		doctoroncall : 'Вызов врача на дом',
		doctorhour : 'Запись на прием',
		medtests : 'Обследования и анализы',
		procedures : 'Процедуры на дому',
	};
	$scope.request_image = $state.params.request_type;
	$scope.request_type = $scope.request_titles[$state.params.request_type];
	
	$scope.tabState = "whom";
	$scope.whom_init = true;
	$scope.symptoms = [];



	$scope.selected_symptoms = [];


	$scope.datepicker = '';
	// $scope.time_from = $scope.datepicker + ' ' + '08:00';
	// $scope.time_to = $scope.datepicker + ' ' + '14:00';
	$scope.time_from = '2017-01-20 08:00';
	$scope.time_to = '2017-01-20 14:00';

	function handleresponse(res) {
		console.log(res.data);
	};
	// $scope.city = ;
	// $scope.address = ;
	// $scope.budget = ;
	// $scope.comment = ;

	$scope.create_request = function() {
		userService.request($scope.time_from, $scope.time_to, $scope.price_from, $scope.price_to, $scope.comment, $scope.city, $scope.address, $scope.selected_symptoms, $scope.request_type)
		.then(handleresponse, handleresponse);
	}
	$scope.change_req_type = function(type) {
		$scope.req_type = type;
		alert($scope.req_type);
	}

	$scope.changeTabState = function(state) {
		$scope.tabState = state;
	}


	$scope.select_gender = function(gender) {
		$scope.selected_gender = gender;
		$scope.whom_init = false;
		$scope.whom_select_area = true;
		$scope.whom_human = true;
	}

	$scope.select_body_area = function(area) {
		$scope.selected_body_area = area;
		$scope.whom_human = false;
		$scope.whom_select_area = false;
		$scope.whom_head_parts = true;
	}
	$scope.select_symptom = function(name, img_src) {
		$scope.selected_name = name;
		$scope.selected_img = img_src;
		$scope.whom_head_parts =false;
		$scope.whom_select_symptoms = true;
		if(name=="Голова"){
			$scope.symptoms = $scope.head_symptoms;
		}
	}
	$scope.add_symptom = function(name) {
		if (!$scope.selected_symptoms.includes(name)){
			$scope.selected_symptoms.push(name);
		}
	}

	$scope.prepare_request = function(){
		$scope.whom_select_symptoms = false;
		$scope.whom_selected_symptom = true;
	}



	$scope.head_parts = [
		{
			name: 'Голова',
			img_src: 'img/icons/organs/head.png'
		},
		{
			name: 'Глаза',
			img_src: 'img/icons/organs/eyes.png'
		},
		{
			name: 'Нос',
			img_src: 'img/icons/organs/nose.png'
		},
		{
			name: 'Уши',
			img_src: 'img/icons/organs/ears.png'
		},
		{
			name: 'Рот',
			img_src: 'img/icons/organs/mouse.png'
		},
		{
			name: 'Шея',
			img_src: 'img/icons/organs/neck.png'
		},
		{
			name: 'Лицо',
			img_src: 'img/icons/organs/face.png'
		},
	];

	//################################NEED TO ADD SCROLLING #####################################################
	$scope.head_symptoms = [
		{
			id: 1,
			name: 'Боль в висках'
		},
		{
			id: 2,
			name: 'Головокружение'
		},
		{
			id: 3,
			name: 'Я не могу описать боль'
		},
		{
			id: 4,
			name: 'Боль в затылке'
		},
		{
			id: 5,
			name: 'Давление'
		},
		{
			id: 6,
			name: 'Боль в затылке'
		},
	]
}]);
		
