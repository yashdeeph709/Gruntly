var app = angular.module("AngularD3", []);

app.directive("barChart", function($window) {
   return {
      restrict: "E",
      template: "<div>This is a chart</div>",
      link: function(scope, element, attrs) {
         var svg = d3.select(element[0]).append("svg").style('width', '500px');
         // Browser onresize event
         $window.onresize = function() {
            scope.$apply();
         };
         var margin = 5;
         var barHeight = 20;
         var barPadding = 5;

         // hard-code data
         scope.data = [{
            name: "Greg",
            score: 98
         }, {
            name: "Ari",
            score: 96
         }, {
            name: 'Q',
            score: 75
         }, {
            name: "Loser",
            score: 48
         }];

         // Watch for resize event
         scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
         }, function() {
            scope.render(scope.data);
         });

         scope.render = function(data) {
            console.log("render called");
            // remove all previous items before render
            svg.selectAll('*').remove();
            // If we don't pass any data, return out of the element
            if (!data) return;

            // setup variables
            var width = d3.select(element[0]).node().offsetWidth - margin,
               // calculate the height
               height = scope.data.length * (barHeight + barPadding),
               // Use the category20() scale function for multicolor support
               color = d3.scale.category20(),
               // our xScale
               xScale = d3.scale.linear()
               .domain([0, d3.max(data, function(d) {
                  return d.score;
               })])
               .range([0, width]);

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
            svg.selectAll('rect')
               .data(data).enter()
               .append('rect')
               .attr('height', barHeight)
               .attr('width', 140)
               .attr('x', Math.round(margin / 2))
               .attr('y', function(d, i) {
                  return i * (barHeight + barPadding);
               })
               .attr('fill', function(d) {
                  return color(d.score);
               })
               .transition()
               .duration(1000)
               .attr('width', function(d) {
                  return d.score;
               });
         }
      }
   }
});

app.directive("histogram", function($window) {
   return {
      restrict: "E",
      template: "<div>This is a Histo</div>",
      link: function(scope, element, attrs) {
         var svg = d3.select(element[0]).append("svg").style('width', '500px');
         // Browser onresize event
         $window.onresize = function() {
            scope.$apply();
         };
         var margin = 5;
         var barHeight = 20;
         var barPadding = 5;

         // hard-code data
         scope.data = [{
            name: "Greg",
            score: 98
         }, {
            name: "Ari",
            score: 96
         }, {
            name: 'Q',
            score: 75
         }, {
            name: "Loser",
            score: 48
         }];

         // Watch for resize event
         scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
         }, function() {
            scope.render(scope.data);
         });

         scope.render = function(data) {
            console.log("render called");
            // remove all previous items before render
            svg.selectAll('*').remove();
            // If we don't pass any data, return out of the element
            if (!data) return;

            // setup variables
            var width = d3.select(element[0]).node().offsetWidth - margin,
               // calculate the height
               height = scope.data.length * (barHeight + barPadding),
               // Use the category20() scale function for multicolor support
               color = d3.scale.category20(),
               // our xScale
               xScale = d3.scale.linear()
               .domain([0, d3.max(data, function(d) {
                  return d.score;
               })])
               .range([0, width]);

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
            svg.selectAll('rect')
               .data(data).enter()
               .append('rect')
               .attr('height', barHeight)
               .attr('width', 140)
               .attr('x', Math.round(margin / 2))
               .attr('y', function(d, i) {
                  return i * (barHeight + barPadding);
               })
               .attr('fill', function(d) {
                  return color(d.score);
               })
               .transition()
               .duration(1000)
               .attr('width', function(d) {
                  return d.score;
               });
         }
      }
   }
});
