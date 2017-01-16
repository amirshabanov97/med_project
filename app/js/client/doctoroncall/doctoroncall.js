  $( function() {
    $( "input" ).checkboxradio();
  } );

angular.module("clientApp").directive('jqdatepicker', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                minDate: 0,
                // onSelect: function (date) {
                //     scope.date = date;
                //     scope.$apply();
                // }
            });
        }
    };
});

angular.module("clientApp").controller('doctoroncall', ['$scope', function($scope) {
	$scope.whom_init = true;

	$scope.head_parts = [
	{
		name: 'head',
		img_src: 'img/icons/organs/head.png'
	},
	{
		name: 'eyes',
		img_src: 'img/icons/organs/eyes.png'
	},
	{
		name: 'nose',
		img_src: 'img/icons/organs/nose.png'
	},
	{
		name: 'ears',
		img_src: 'img/icons/organs/ears.png'
	},
	{
		name: 'mouse',
		img_src: 'img/icons/organs/mouse.png'
	},
	{
		name: 'neck',
		img_src: 'img/icons/organs/neck.png'
	},
	{
		name: 'face',
		img_src: 'img/icons/organs/face.png'
	},
	]//################################NEED TO ADD SCROLLING #####################################################

	$scope.head_symptoms = [
	{
		name: 'Боль в висках'
	},
	{
		name: 'Головокружение'
	},
	{
		name: 'Я не могу описать боль'
	},
	{
		name: 'Боль в затылке'
	},
	{
		name: 'Давление'
	},
	{
		name: 'Боль в затылке'
	},
	]

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
	$scope.select_symptom = function(name, img_src){
		$scope.selected_name = name;
		$scope.selected_img = img_src;
		$scope.whom_head_parts =false;
		$scope.whom_select_symptoms = true;
	}

}]);