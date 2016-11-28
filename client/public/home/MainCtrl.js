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
      y: 5
  }, {
      key: "",
      y: 2
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
            if(i === 0){
              return "#08a008";
            }
            return "#cacaca"
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
              var $chartContainer = $(chart.container);
              var $title = $chartContainer.find('.nv-pie-title');
              $title.css('font-size', '30px');
              var $svg = d3.select(chart.container);
              $svg.selectAll('.nv-pie')
              .append('g')
              .append('text')
              .attr('class', 'pie-extra')
              .attr('dy', '-0.9em')
              .style({
                'font-size': '22px',
                'text-anchor': 'middle'
              })
              .text('abc');
              //$('<g><text dy="0.35em">OV</text></g>').insertBefore($title);
          }
      }
  };
  $scope.ovData = [{
      key: "",
      y: 5
  }, {
      key: "",
      y: 2
  }];

	}
})();
