(function() {
    'use strict';

    angular.module('MainCtrl', [])
        .controller('MainController', homecontroller).service('mo2Service', ['$http', function($http){
		function getMyPerformance(){
			return	$http.get("j3p_odata_dest/MO2/UI/uiservices/mo2service.xsodata/MyPerfInp(BA_IP='9543617',PERIOD_IP='201604')/MyPerfRes?$format=json");
		}
		function getMyGoal(){
			return	$http.get("j3p_odata_dest/MO2/UI/uiservices/mo2service.xsodata/MyGoalInp(BA_IP='9543617',PERIOD_IP='201604')/MyGoalRes?$format=json");
		}
		return {
			getMyPerformance: getMyPerformance,
			getMyGoal: getMyGoal
		};
	}]);


    function homecontroller($scope, $http, mo2Service) {

        $scope.pvOptions = {
            chart: {
                type: 'pieChart',
                title: "PV",
                height: 250,
                showLegend: false,
                donut: true,
                growOnHover: false,
                tooltip: {
                    enabled: true
                },
                color: function(d, i) {
                    if (i === 0) {
                        return "#52bc52";
                    }
                    return "#e2e2e2"
                },
                y: function(d) {
                    return d.y;
                },
                pie: {
                    startAngle: function(d) {
                        return d.startAngle / 2 - Math.PI / 2
                    },
                    endAngle: function(d) {
                        return d.endAngle / 2 - Math.PI / 2
                    }
                }
            }
        };
        $scope.pvData = [{
            key: "",
            y: 100
        }, {
            key: "",
            y: 400
        }];
        $scope.ovOptions = {
            chart: {
                type: 'pieChart',
                title: "OV",
                height: 250,
                showLegend: false,
                donut: true,
                growOnHover: false,
                tooltip: {
                    enabled: false
                },
                color: function(d, i) {
                    if (i === 0) {
                        return "#52bc52";
                    }
                    return "#e2e2e2"
                },
                y: function(d) {
                    return d.y;
                },
                pie: {
                    startAngle: function(d) {
                        return d.startAngle / 2 - Math.PI / 2
                    },
                    endAngle: function(d) {
                        return d.endAngle / 2 - Math.PI / 2
                    }
                }
            }
        };

        function createExtraTexts(chart) {
            var data = chart.container.__data__;
            var $chartContainer = d3.select(chart.container);
            var $title = $chartContainer.select('.nv-pie-title');
            $title.style('font-size', '30px');
            var $svg = d3.select(chart.container);
            var pie = $svg.select('.nv-pie').select('.nv-pie');
            pie.append('g')
                .append('text')
                .attr('class', 'pie-extra')
                .attr('dy', '-0.9em')
                .style({
                    'font-size': '22px',
                    'text-anchor': 'middle'
                })
                .text(data[1].y);

            var maxValue = data[0].y + data[1].y;
            var minMaxContainer = $svg.select('.nv-pie').select('g');
            minMaxContainer.append('g')
                .attr('transform', 'translate(40,200)')
                .append('text').attr('class', 'minValue').style({
                    'font-size': '22px'
                }).text('0');
            minMaxContainer.append('g')
                .attr('transform', 'translate(175,200)')
                .append('text').attr('class', 'maxValue').style({
                    'font-size': '22px'
                }).text(maxValue);
        }
        $scope.ovData = [{
            key: "",
            y: 500
        }, {
            key: "",
            y: 1500
        }];
        $scope.performanceOptions = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d) {
                    return d.Week;
                },
                y: function(d) {
                    return d.Cost;
                },
                showLegend: false,
                useInteractiveGuideline: true,

            }
        };
        $scope.performanceData = [{
            key: 'Data',
            values:[{
						"Week": "1",
						"Revenue": "450000",
						"Cost": "350000.00"
					}, {
						"Week": "2",
						"Revenue": "400000",
						"Cost": "390000.00"
					}, {
						"Week": "3",
						"Revenue": "420000",
						"Cost": "300000.00"
					}, {
						"Week": "4",
						"Revenue": "440000",
						"Cost": "320000.00"
					}]
        }];
        $scope.legCount = 3;
	    mo2Service.getMyPerformance().then(function(response){
	    	$scope.performanceData = response.data.d.results[0];
	    	var period = $scope.performanceData.PERIOD;
	    	$scope.performanceData.OV = kFormatter($scope.performanceData.OV);
	    	$scope.performanceData.PV = kFormatter($scope.performanceData.PV);
	    	var date = new Date(period.substr(0,4) + "/" + period.substr(4,6));
	    	$scope.performanceData.PERIOD = date;
	    });
	    mo2Service.getMyGoal().then(function(response){
	    	$scope.myGoalJSONData = convertJSONObjectData(response.data.d.results, 'MIN_LEG');
	    	$scope.pvData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'PV');
	    	$scope.ovData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'OV');
	    	console.log($scope.pvData);
	    });
	    function kFormatter(num) {
			 return num > 999 ? (num/1000).toFixed(0) + 'K' : num;
		}

	    function convertJSONObjectData(result, key){
	    	var obj = {};
	    	for(var i=0; i<result.length; i++){
	    		obj[result[i][key]] = result[i];
	    	}
	    	return obj;
	    }
	    function getPVOVGraphData(data, type){
	    	var array = [];
	    	array.push({
	            key: "",
	            y: data["CUR_"+type]
	        });
	        array.push({
	            key: "",
	            y: data["MIN_"+type]
	        });
	        return array;
	    }
	    $scope.updateGraphs = function(){
	    	$scope.pvData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'PV');
	    	$scope.ovData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'OV');
	    };
    }
})();
