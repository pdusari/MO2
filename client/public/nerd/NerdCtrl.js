(function() {
    'use strict';
	
	angular.module('NerdCtrl', [])

	.controller('NerdController', Nerdcontroller);


	function Nerdcontroller($scope) {

		$scope.tagline = 'Nothing beats a pocket protector!';

	}
})();