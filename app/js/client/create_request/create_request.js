angular.module("clientApp").directive('jqdatepicker', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.datepicker({
                minDate: 0,
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
            attrs.$observe('jqdatepicker', function(value) {
            	if(value) {
            		$scope.date = value;
            	}
            });
        }
    };
});

angular.module("clientApp").directive('selectmorn', function() {
	return {
		restrict: 'A',
		link: function ($scope, element, attrs) {
			$(element).click(function() {
				$(this).toggleClass('added');
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
                $(this).toggleClass('added');
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
                $(this).toggleClass('added');
				$('.even_check input').prop("checked", !$('.even_check input').prop("checked"));
			})
		}
	}
});

angular.module("clientApp").controller('create_request', ['clientService','$state', '$scope', function(clientService, $state, $scope) {
	var data = [];
    $scope.request_titles = {
        doctoroncall : 'Вызов врача на дом',
        doctorhour : 'Запись на прием',
        medtests : 'Обследования и анализы',
        procedures : 'Процедуры на дому'
    };
    $scope.payload = {};

	//alert(request_type);
	$scope._state = $state.params.request_type;
	$scope.date = '';
	data = localStorage.getItem("data");
	$scope.$watch('date', function (value) {
			if (value) {
					$scope.date = value;
			}
	});

    $scope.price_from = "";
    $scope.price_to = "";
    $scope.comment = "";
    $scope.address = "";
    $scope.procedures = [
        { type: 'Инъекции (уколы) внутримышечные'},
        { type: 'Внутривенные, подкожные'},
        { type: 'Внутривенные инфузии (постановка капельниц, систем)'},
        { type: 'Снятие интоксикации (в.т.ч. алкогольной)'},
        { type: 'Перевязка на дому'},
        { type: 'Согревающий компресс'},
        { type: 'Измерение артериального давления'},
        { type: 'Промывание желудка'},
        { type: 'Клизмы (лечебные, очистительные)'},
        { type: 'Кислородная подушка'},
        { type: 'Сбор мокроты, мочи, кала для лабораторного исследования'},
        { type: 'Повязки'},
        { type: 'Грелки'},
        { type: 'Пузырь со льдом и холодные примочки'},
        { type: 'Горчичники'},
        { type: 'Медицинские банки'},
        { type: 'Ингаляции' },
        { type: 'Измерение температуры тела' },
        { type: 'Хирургические перевязки, снятие швов' },
        { type: 'Забор биоматериала для широкого спектра исследования' },
        { type: 'Массаж (взрослым и детям)' },
        { type: 'Катетеризация мочевого пузыря и промывание' },
        { type: 'Постановка капельниц в домашних условиях' }
	];
    $scope.isSelectedProcedure = function(item) {
        return _.contains($scope.selected_procedures, item);
    };
    $scope.selected_procedures = [];
    $scope.toggle_procedure = function (item) {
        if (!_.contains($scope.selected_procedures, item)) {
            $scope.selected_procedures.push(item);
        } else {
        	$scope.selected_procedures = _.without($scope.selected_procedures, item);
		}
	};

	$scope.request_type = $scope.request_titles[$scope._state];

	$scope.tabState = "whom";
	console.info($scope._state);
	if ($scope._state == 'medtests' || $scope._state == 'procedures') {
		$scope.tabState = 'what';
	}

	$scope.whom_init = true;
	$scope.whom_human = false;

	$scope.symptoms = [];
	$scope.selected_symptoms = [];

	$scope.date = '2017-01-20';
	$scope.time_from = '08:00';
	$scope.time_to = '14:00';

	$scope.change_req_type = function(type) {
		$scope.req_type = type;

		alert($scope.req_type);
	};

	$scope.changeTabState = function(state) {
		$scope.tabState = state;
	};

	$scope.select_gender = function(gender) {
		$scope.request_type = $scope.req_type;
		$scope.selected_gender = gender;
		$scope.whom_init = false;
		$scope.whom_select_area = true;
		$scope.whom_human = true;
	};

	$scope.select_body_area = function(area) {
		if (!$scope.whom_human) return;

		$scope.selected_body_area = area;
		$scope.whom_human = false;
		$scope.whom_select_area = false;
		$scope.whom_head_parts = true;
	};


	$scope.select_symptom = function(name, img_src) {
		$scope.selected_name = name;
		$scope.selected_img = img_src;
		$scope.whom_head_parts =false;
		$scope.whom_select_symptoms = true;
        $scope.symptoms = $scope.head_symptoms;

	};
	$scope.add_symptom = function(item) {
		if (!_.contains($scope.selected_symptoms, item)) {
			$scope.selected_symptoms.push(item);
		}
		//if (!$scope.selected_symptoms.includes(name)){
		//	$scope.selected_symptoms.push({ "type":name });
		//}
	};

	$scope.isSelectedSymptom = function(item) {
		return _.contains($scope.selected_symptoms, item);
	};

	$scope.prepare_request = function(){
		$scope.whom_select_symptoms = false;
		$scope.whom_selected_symptom = true;
		$scope.changeTabState('where');
	};

	var temp ={
		"id" : 2,
		"requesttype" : $scope.req_type,
		"title_pain" : "Голова",
		"symptoms" : $scope.selected_symptoms,
		"doctor_types" : [
			{
				type:"Терапевт"
			},
			{
				type:"Гениколог"
			},
			
		],
		"comment" : $scope.comment,
		"address":$scope.address,
		"date":$scope.date,
		"time" : {
			"from" : $scope.time_from,
			"to" : $scope.time_to,
		},
		"status" : false,
		"count" : "0",
		"budget":{
			"from":$scope.price_from,
			"to": $scope.price_to,
		}
	};

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

	clientService.getRequestsList().then(
		function(response) {
			// var data = temp;

			//  data.push(response.data.data);
			 console.log(data)
		}
	);
	$scope.is = function(state) {
		return $scope.tabState == state;
	};

	$scope.submit = function() {

		console.log($scope);

        var type = {
            'doctoroncall': 0,
            'doctorhour': 1,
            'medtests': 2
        };

        var request_record = {
			'requesttype' : type[$scope._state],
			'title_pain' : $scope.request_titles[$scope._state],
			'symptoms' : $scope.selected_symptoms,
			'doctor_types' : [
				{
					type:"Травматолог"
				}
			],
			'comment' :  $scope.comment,
			'date' : $scope.date,
			'address' : $scope.address,
			'time' : {
				'from' : $scope.time_from,
				'to' : $scope.time_to
			},
			'status' : false,
			'count' : 0,
			'budget' : {
				'from' : $scope.price_from,
				'to' : $scope.price_to
			}
		};


		if ($scope._state == 'medtests' || $scope._state == 'procedures') {
			request_record['doctor_types'] = $scope.selected_procedures;
		}

		console.log(request_record);

		var list_from_storage = JSON.parse(localStorage.getItem("data"));
		list_from_storage.push(request_record);
		localStorage.setItem('data', JSON.stringify(list_from_storage));

		$state.go('requests_list');
	};

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
