angular.module("medApp").controller("base", ["$scope", function($scope) {
	
	$("#doctoroncall").click(function() {
		$("#doctoroncall_modal").modal("show");
	});
	$("#doctorhour").click(function() {
		$("#doctorhour_modal").modal("show");
	});
	$("#medtest").click(function() {
		$("#medtest_modal").modal("show");
	});
	$("#procedures").click(function() {
		$("#procedures_modal").modal("show");
	});
	
	$scope.state = "when";
	$scope.change_state = function(state) {
		$scope.state = state;
	}
	$scope.substate = "today";
	$scope.change_substate = function(state) {
		$scope.substate = state;
	}
}]);