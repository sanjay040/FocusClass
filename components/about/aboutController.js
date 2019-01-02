angular.module("focusClass").controller("aboutController", function($scope, $rootScope, $location){
	
	$rootScope.currentPath = $location.path(); 
	console.log("This is aboutController", $rootScope.currentPath);

	
});