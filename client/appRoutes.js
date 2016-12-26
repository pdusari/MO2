(function() {
  'use strict';
  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/myteam', {
      templateUrl: 'public/myteam/myteam.html',
      controller: 'MyTeamController'
    }).when('/reports', {
      templateUrl: 'public/reports/reports.html',
      controller: 'ReportsController'
    }).when('/', {
      templateUrl: 'public/home/home.html',
      controller: 'MainController'
    });
    $locationProvider.html5Mode(true);
  }]);
})();
