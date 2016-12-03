(function() {
    'use strict';

    angular.module('MainCtrl', [])
        .controller('MainController', homecontroller).service('mo2Service', ['$http', function($http) {
            function getMyPerformance() {
                return $http.get("j3p_odata_dest/MO2/UI/uiservices/mo2service.xsodata/MyPerfInp(BA_IP='9543617',PERIOD_IP='201604')/MyPerfRes?$format=json");
            }

            function getMyGoal() {
                return $http.get("j3p_odata_dest/MO2/UI/uiservices/mo2service.xsodata/MyGoalInp(BA_IP='9543617',PERIOD_IP='201604')/MyGoalRes?$format=json");
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
        var monthList = ["00"];
        var weekOVGraphOptionsData = {
            chart: {
                type: 'lineChart',
                height: 200,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d) {
                    return d.MONTH;
                },
                y: function(d) {
                    return d.OV / 1;
                },
                showLegend: true,
                xAxis: {
                    axisLabel: 'Week'
                },
                color: ['#b6d957', '#5cbae6'],
                xAxis: {
                    tickValues: d3.range(0, getMaxMonth(response.results) + 1),
                    showMaxMin: false,
                    tickFormat: function(d) {
                        var date = new Date();
                        date.setMonth(d - 1);
                        if (d === 0) {
                            return '';
                        }
                        return d3.time.format('%b')(date);
                    }
                },
                yAxis: {
                    tickFormat: function(d) {
                        return d3.format('s')(d);
                    },
                    ticks: 4,
                    showMaxMin: false
                },
                xDomain: [0, getMaxMonth(response.results) + 1],
                yDomain: [0, 6000],
                showValues: true
            }
        };
        var yearOVGraphOptionsData = {
            chart: {
                type: 'lineChart',
                height: 200,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d) {
                    return parseInt(d.WEEK_NUM / 1);
                },
                y: function(d) {
                    return d.OV / 1;
                },
                showLegend: true,
                xAxis: {
                    showMaxMin: false,
                    tickFormat: function(d) {
                        if (d === 0) {
                            return '';
                        }
                        return d3.format('s')(d);
                    }
                },
                color: ['#b6d957', '#5cbae6'],
                yAxis: {
                    showMaxMin: false,
                    tickFormat: function(d) {
                        return d3.format('s')(d);
                    }
                },
                xDomain: [0, 5],
                yDomain: [0, getMaxValue(response.results)],
                showValues: true
            }
        };
        $scope.performanceOptions = weekOVGraphOptionsData;
        $scope.performanceData = [{
            key: 'Previous month',
            values: getMonthData(response.results, "MONTH", '03')
        }, {
            key: 'Current month',
            values: getMonthData(response.results, "MONTH", '04')
        }];
        var count = 10;
        $scope.refresh = function() {
            $scope.pvData = [{
                key: "",
                y: 1600 + count
            }, {
                key: "",
                y: 1800
            }];
            $scope.pvGraphChange();
            count += 200;
        }
        $scope.performanceChartType = "weekOVData";
        $scope.$watch('performanceChartType', function(value) {
            if (value !== "weekOVData") {
                $scope.performanceOptions = weekOVGraphOptionsData;
                $scope.performanceData = [{
                    key: 'Previous month',
                    values: getYearToDateData(response.results)
                }];
            } else {
                $scope.performanceOptions = yearOVGraphOptionsData;
                $scope.performanceData = [{
                    key: 'Previous month',
                    values: getMonthData(response.results, "MONTH", '03')
                }, {
                    key: 'Current month',
                    values: getMonthData(response.results, "MONTH", '04')
                }];
            }
        });
        $scope.pvGraphChange = function() {
            createExtraTexts('#pvGraphId', $scope.pvData);
        };
        $scope.ovGraphChange = function() {
            createExtraTexts('#ovGraphId', $scope.ovData);
        };

        function createExtraTexts(chart, data) {
            var $chartContainer = d3.select(chart);
            var $title = $chartContainer.select('.nv-pie-title');
            $title.style('font-size', '30px');
            var $svg = d3.select(chart);
            var pie = $svg.select('.nv-pie').select('.nv-pie');
            $chartContainer.select('.pie-extra').remove();
            $chartContainer.select('.minValue').remove();
            $chartContainer.select('.maxValue').remove();
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
                .attr('transform', 'translate(40,130)')
                .append('text').attr('class', 'minValue').style({
                    'font-size': '22px'
                }).text('0');
            minMaxContainer.append('g')
                .attr('transform', 'translate(165,130)')
                .append('text').attr('class', 'maxValue').style({
                    'font-size': '22px'
                }).text(maxValue);
        }
        $scope.performanceData = [{
            key: 'Data',
            values: [{
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
        mo2Service.getMyPerformance().then(function(response) {
            $scope.performanceData = response.data.d.results[0];
            var period = $scope.performanceData.PERIOD;
            $scope.performanceData.OV = kFormatter($scope.performanceData.OV);
            $scope.performanceData.PV = kFormatter($scope.performanceData.PV);
            var date = new Date(period.substr(0, 4) + "/" + period.substr(4, 6));
            $scope.performanceData.PERIOD = date;
        });
        mo2Service.getMyGoal().then(function(response) {
            $scope.myGoalJSONData = convertJSONObjectData(response.data.d.results, 'MIN_LEG');
            $scope.pvData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'PV');
            $scope.ovData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'OV');
            console.log($scope.pvData);
        });

        function kFormatter(num) {
            return num > 999 ? (num / 1000).toFixed(0) + 'K' : num;
        }

        function convertJSONObjectData(result, key) {
            var obj = {};
            for (var i = 0; i < result.length; i++) {
                obj[result[i][key]] = result[i];
            }
            return obj;
        }

        function getPVOVGraphData(data, type) {
            var array = [];
            array.push({
                key: "",
                y: data["CUR_" + type]
            });
            array.push({
                key: "",
                y: data["MIN_" + type]
            });
            return array;
        }
        $scope.updateGraphs = function() {
            $scope.pvData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'PV');
            $scope.ovData = getPVOVGraphData($scope.myGoalJSONData[$scope.legCount], 'OV');
        };
    }
})();
var response = {
    "results": [{
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928471')"
        },
        "ID": "134001347547928471",
        "ROOT": 9543617,
        "PV_PERIOD": "201603",
        "YEAR": "2016",
        "WEEK": "09",
        "WEEK_NUM": 1,
        "MONTH": "03",
        "OV": "1339.75"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928472')"
        },
        "ID": "134001347547928472",
        "ROOT": 9543617,
        "PV_PERIOD": "201603",
        "YEAR": "2016",
        "WEEK": "10",
        "WEEK_NUM": 2,
        "MONTH": "03",
        "OV": "1263.75"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928473')"
        },
        "ID": "134001347547928473",
        "ROOT": 9543617,
        "PV_PERIOD": "201603",
        "YEAR": "2016",
        "WEEK": "11",
        "WEEK_NUM": 3,
        "MONTH": "03",
        "OV": "852.75"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928474')"
        },
        "ID": "134001347547928474",
        "ROOT": 9543617,
        "PV_PERIOD": "201603",
        "YEAR": "2016",
        "WEEK": "12",
        "WEEK_NUM": 4,
        "MONTH": "03",
        "OV": "327.5"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928475')"
        },
        "ID": "134001347547928475",
        "ROOT": 9543617,
        "PV_PERIOD": "201603",
        "YEAR": "2016",
        "WEEK": "13",
        "WEEK_NUM": 5,
        "MONTH": "03",
        "OV": "1223.25"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928476')"
        },
        "ID": "134001347547928476",
        "ROOT": 9543617,
        "PV_PERIOD": "201604",
        "YEAR": "2016",
        "WEEK": "13",
        "WEEK_NUM": 1,
        "MONTH": "04",
        "OV": "784.25"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928477')"
        },
        "ID": "134001347547928477",
        "ROOT": 9543617,
        "PV_PERIOD": "201604",
        "YEAR": "2016",
        "WEEK": "14",
        "WEEK_NUM": 2,
        "MONTH": "04",
        "OV": "742.25"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928478')"
        },
        "ID": "134001347547928478",
        "ROOT": 9543617,
        "PV_PERIOD": "201604",
        "YEAR": "2016",
        "WEEK": "15",
        "WEEK_NUM": 3,
        "MONTH": "04",
        "OV": "693"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('134001347547928479')"
        },
        "ID": "134001347547928479",
        "ROOT": 9543617,
        "PV_PERIOD": "201604",
        "YEAR": "2016",
        "WEEK": "16",
        "WEEK_NUM": 4,
        "MONTH": "04",
        "OV": "920.5"
    }, {
        "__metadata": {
            "type": "MO2.UI.uiservices.mo2service.MyTeamPerformanceType",
            "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeamPerformance('1340013475479284710')"
        },
        "ID": "1340013475479284710",
        "ROOT": 9543617,
        "PV_PERIOD": "201604",
        "YEAR": "2016",
        "WEEK": "17",
        "WEEK_NUM": 5,
        "MONTH": "04",
        "OV": "1862.5"
    }]
};

function getMonthData(dataArray, compareKey, compareValue) {
    var array = [];
    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i][compareKey] === compareValue) {
            array.push(dataArray[i]);
        }
    }
    return array;
}

function getMaxValue(dataArray) {
    var array = [];
    for (var i = 0; i < dataArray.length; i++) {
        array.push(parseFloat(dataArray[i]['OV']));
    }
    var max = Math.max.apply(null, array);
    max = (max / 1000).toFixed(0);
    return max * 1000;
}

function getSumBasedOnMonth(dataArray, monthCount) {
    var sum = 0;
    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i]['MONTH'] === monthCount) {
            sum += parseFloat(dataArray[i]['OV']);
        }
    }
    return sum;
}

function getMonthsList(dataArray) {
    var array = {};
    for (var i = 0; i < dataArray.length; i++) {
        if (!array.hasOwnProperty(dataArray[i]['MONTH'])) {
            array[dataArray[i]['MONTH']] = dataArray[i]['MONTH'];
        }
    }
    return Object.keys(array);
}

function getYearToDateData(dataArray) {
    var months = getMonthsList(dataArray);
    var data = [];
    for (var i = 0; i < months.length; i++) {
        var obj = { MONTH: months[i] }
        obj['OV'] = getSumBasedOnMonth(dataArray, months[i]).toFixed(2);
        data.push(obj);
    }
    return data;
}

function getMaxMonth(dataArray) {
    var array = getMonthsList(dataArray);
    return Math.max.apply(null, array);
}
