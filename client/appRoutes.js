(function() {
    'use strict';
	
	angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/nerds', {
				templateUrl: 'public/nerd/nerd.html',
				controller: 'NerdController'
			})

			.when('/geeks', {
				templateUrl: 'public/geek/geek.html',
				controller: 'GeekController'	
			}).when('/', {
				templateUrl: 'public/home/home.html',
				controller: 'MainController'
			});

		$locationProvider.html5Mode(true);

	}]);

})();