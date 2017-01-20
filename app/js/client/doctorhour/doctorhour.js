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

angular.module("clientApp").controller('doctorhour', ['$scope', function($scope) {

	$scope.changeTabState = function(state) {
		$scope.tabState = state;
	}


}]);