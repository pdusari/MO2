angular.module('ReportCtrl', []).controller('ReportsController', function($scope,$http) {
console.log("hello");
	$scope.tagline = 'The square root of life is pi!';
	//var odataUrl = "https://j3pb7d382812.us1.hana.ondemand.com/MO2/UI/uiservices/mo2service.xsodata/TopEnrollerInp(IP_BA_ID=9543617,IP_PERIOD=201604)/TopEnrollerRes?$format=json";
//var params = {"Username":"test", "Password":"test"};
var odataUrl='/data/Enroller.json';
	$http.get(odataUrl)
		.then( function(response) {
				$scope.List = response.data.results;
				console.log($scope.List);
			},
			function(error){
				alert("An error occurred");
			}
		);
		$scope.viewfullList1=function(){
			$('.list').show();
			var odataUrl='/data/EnrolledRes.json';
				$http.get(odataUrl)
					.then( function(response) {
							$scope.fullList = response.data.results;
						},
						function(error){
							alert("An error occurred");
						}
					);
		}
});
