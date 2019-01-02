angular.module("focusClass").controller("contactController", function($rootScope, $location){

	$rootScope.currentPath = $location.path();
	console.log("This is contactController", $rootScope.currentPath);


});