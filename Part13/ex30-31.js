//Add values to the data array

var data = [3, 4, 8, 12, 6, 9, 2, 7, 1, 5, 10, 3];

//Sort the values from smallest to largest

data.sort(function(a, b) {
  return a - b;
});

//Define constants

const xSize = 400; const ySize = 400;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

//Append SVG Object to the Page

const svg = d3.select("body")
 .append("svg")
 .attr('width', xSize )
 .attr('height', ySize )
 .append("g")
 .attr("transform","translate(" + xSize/2 + "," + ySize/2 + ")");

const radius = Math.min(xSize, ySize) / 2;

//Define a color gradient

var color = d3.scaleLinear().domain([d3.min(data),d3.max(data)]).range(["blue", "red"]);

// Generate the pie and do not sort (so that the elements are added in the order they are in in the data array)

var pie = d3.pie().sort(null);

//Generate the arcs

const arc = d3.arc()
 .innerRadius(0)
 .outerRadius(radius);

//Generate groups

var arcs = svg.selectAll("arc")
 .data(pie(data))
 .enter()
 .append("g")
 .attr("class", "arc");

//Draw arc paths

arcs.append("path")
 .attr("fill", function(d, i) {
 	return color(i);
 })
 .attr("id","arc")
 .attr("d", arc);

//Add text to each arc using the arc.centroid() method to obtain the coordinates for the center of each arc

svg.selectAll('arcs')
  .data(pie(data))
  .enter()
  .append('text')
  .text(function(d){return d.data})
  .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")";  })
  .style("text-anchor", "middle")
  .style("font-size", 17)
  .attr("stroke","white");
