(function() {
    'use strict';

    angular.module('MainCtrl', [])
        .controller('MainController', homecontroller);


    function homecontroller($scope) {

        $scope.pvOptions = {
            chart: {
                type: 'pieChart',
                title: "PV",
                height: 400,
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
                },
                callback: function(chart) {
                    createExtraTexts(chart);
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
                height: 400,
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
                },
                callback: function(chart) {
                    createExtraTexts(chart);
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
                    return d.x;
                },
                y: function(d) {
                    return d.y;
                },
                showLegend: false,
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'Week'
                },
                yAxis: {
                    axisLabel: 'USD ($)',
                    tickFormat: function(d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart) {
                    console.log("!!! lineChart callback !!!");
                }
            }
        };
        $scope.performanceData = [{
            key: 'Data',
            values: [{
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 4
            }, {
                x: 3,
                y: 9
            }, {
                x: 4,
                y: 16
            }, {
                x: 5,
                y: 25
            }]
        }];
    }
})();
