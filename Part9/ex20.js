const width = 400;
const height = 300;
var data = [10, 15, 20, 25, 30];
var svg = d3.select("body")
 .append("svg")
 .attr("width", width)
 .attr("height", height);
var xscale = d3.scaleLinear()
 .domain([0, d3.max(data)])
 .range([0, width - 100]);
var yscale = d3.scaleLinear()
 .domain([0, d3.max(data)])
 .range([height/2, 0]);
var x_axis = d3.axisBottom()
 .scale(xscale);
var y_axis = d3.axisLeft()
 .scale(yscale);
 svg.append("g")
 .attr("transform", "translate(50, 20)")
 .call(y_axis);
var xAxisTranslate = (height/2 + 10) + 10;
 svg.append("g")
 .attr("transform", "translate(50, " + xAxisTranslate +")")
 .call(x_axis)
var x_top = d3.axisTop()
	.scale(xscale);
var xTopTranslate = 20 ;
 svg.append("g")
 .attr("transform", "translate(50, " + xTopTranslate +")")
 .attr("class", "axisBlue")
 .call(x_top)
var y_right = d3.axisRight()
 .scale(yscale);
var yRightTranslate = width - 50;
 svg.append("g")
 .attr("transform", "translate(" + yRightTranslate  + ", 20)")
 .attr("class", "axisBlue")
 .call(y_right);
