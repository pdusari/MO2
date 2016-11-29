(function() {
    'use strict';

	angular.module('MyTeamCtrl', [])

	.controller('MyTeamController', MyTeamcontroller);


	function MyTeamcontroller($scope) {

		$scope.tagline = 'Nothing beats a pocket protector!';

	}
})();
