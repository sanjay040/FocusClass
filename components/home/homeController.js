angular.module("focusClass").controller("homeController", function($rootScope, $location){
	
	$rootScope.currentPath = $location.path();
	console.log("This is homeController", $rootScope.currentPath);


});