(function() {
    'use strict';
	
	angular.module('MainCtrl', [])
	.controller('MainController', homecontroller);


	function homecontroller($scope) {

		$scope.tagline = 'To the moon and back!';	

	}
})();