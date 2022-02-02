const width = 400;
const height = 300;
var data = [10, 15, 20, 25, 30];

//Appends an SVG

var svg = d3.select("body")
 .append("svg")
 .attr("width", width)
 .attr("height", height);

//Creates two scales which will scale the axes

var xscale = d3.scaleLinear()
 .domain([0, d3.max(data)])
 .range([0, width - 100]);

var yscale = d3.scaleLinear()
 .domain([0, d3.max(data)])
 .range([height/2, 0]);

//X and Y axis variables created

var x_axis = d3.axisBottom()
 .scale(xscale);

var y_axis = d3.axisLeft()
 .scale(yscale);

//Adds G element which calls the y axis and sets its position using translate

svg.append("g")
 .attr("transform", "translate(50, 20)")
 .call(y_axis);

//Creates a variable to calculate the x axis position, then adds the x axis and translates it into postion

var xAxisTranslate = (height/2 + 10) + 10;
svg.append("g")
 .attr("transform", "translate(50, " + xAxisTranslate +")")
 .call(x_axis);

//Repeats the above for the top and right axes

var x_top = d3.axisTop()
	.scale(xscale);

//Adds a class attribute to the axes so that they can be coloured using CSS getElementById('axisBlue')

var xTopTranslate = 20 ;
 svg.append("g")
 .attr("transform", "translate(50, " + xTopTranslate +")")
 .attr("class", "axisBlue")
 .call(x_top);

var y_right = d3.axisRight()
 .scale(yscale);

var yRightTranslate = width - 50;
 svg.append("g")
 .attr("transform", "translate(" + yRightTranslate  + ", 20)")
 .attr("class", "axisBlue")
 .call(y_right);
