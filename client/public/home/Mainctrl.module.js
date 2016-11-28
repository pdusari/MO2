(function() {
    'use strict';
	
	angular.module('MainCtrl', [])
	.config(getmainpage);

	function getmainpage($routeProvider, $locationProvider){
		$routeProvider

			// home page
			.when('/', {
				templateUrl: 'public/home/home.html',
				controller: 'MainController'
			})
		
	}

})();