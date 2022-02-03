//Set Dimensions

var xSize = 325; var ySize = 325;
const margin = 30;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

//Create variables for slider elements

var slider1 = document.getElementById("slider1");

var val1 = slider1.value;

var multiplier1 = document.getElementById("Multiplier1");
multiplier1.innerHTML = slider1.value;

var slider2 = document.getElementById("slider2");

var val2 = slider2.value;

var multiplier2 = document.getElementById("Multiplier2");
multiplier2.innerHTML = slider2.value;

//Create Random Points

const numPoints = 100;

const dataSet1 = [];
const dataSet2 = [];
const dataSet3 = [];

for (let i = 0; i < numPoints; i++) { dataSet1.push( {x: i/100, y: Math.sin( val1 * i/100 ) } ); }
for (let i = 0; i < numPoints; i++) { dataSet2.push( {x: i/100, y: Math.sin( val2 * i/100 ) } ); }

//DataSet3 is the summation of the elements from dataSet1 and dataSet2

for (let i = 0; i < numPoints; i++) { dataSet3.push( {x: dataSet1[i].x + dataSet2[i].x, y:dataSet1[i].y + dataSet2[i].y }); }


//Define the function plotGraph which takes in the dataSet and an id which will be used for exiting elements

function plotGraph(data, id){

/* Get the 'limits' of the data - the full extent (mins and max)
so the plotted data fits perfectly */

  const xExtent = d3.extent( data, d=>{ return d.x } );
  const yExtent = d3.extent( data, d=>{ return d.y } );

//Append SVG Object to the Page

  const svg = d3.select("#"+id)
   .append("svg")
   .attr('width', xSize )
   .attr('height', ySize )
   .append("g")
   .attr("transform","translate(" + margin + "," + margin + ")");

//X Axis

  const x = d3.scaleLinear()
   .domain([ xExtent[0], xExtent[1] ])
   .range([0, xMax]);

//bottom

  svg.append("g")
   .attr("transform", "translate(0," + yMax + ")")
   .call(d3.axisBottom(x))

//top

  svg.append("g")
   .call(d3.axisTop(x));

//Y Axis

  const y = d3.scaleLinear()
   .domain([ yExtent[0], yExtent[1] ])
   .range([ yMax, 0]);

//left y axis

  svg.append("g")
   .call(d3.axisLeft(y));

//right y axis

  svg.append("g")
   .attr("transform", `translate(${yMax},0)`)
   .call(d3.axisRight(y));

//Add the line

  svg.append("path")
   .datum(data)
   .attr("fill", "none")
   .attr("stroke", "steelblue")
   .attr("stroke-width", 1.5)
   .attr("d", d3.line()
   .x(function(d) { return x(d.x) })
   .y(function(d) { return y(d.y) })
   );
	}

//Call the plotGraph() function


plotGraph(dataSet1,"a");
plotGraph(dataSet2,"b");
plotGraph(dataSet3,"c");


//Placeholder array for exiting the SVG

var arr = [1];

//Function updatePath, removes the old CSV and then calls the plotGraph() method again using the id given by plotGraph()

function updatePath(data,id){
  if(arr !== []){
    arr.pop();
  }

  var p = d3.select("#"+id)
    .selectAll("svg")
    .data(arr)
    .exit()
    .remove()

  plotGraph(data,id);
}

//When the slider is updated, update the value values and then recreate the dataset and call update path with the new data

slider1.oninput = function() {
  val1 = this.value;
  multiplier1.innerHTML = this.value;
  const dataSet1 = [];
  const dataSet2 = [];
  const dataSet3 = [];
  for (let i = 0; i < numPoints; i++) { dataSet1.push( {x: i/100, y: Math.sin( val1 * i/100 ) } ); }
  for (let i = 0; i < numPoints; i++) { dataSet2.push( {x: i/100, y: Math.sin( val2 * i/100 ) } ); }
  for (let i = 0; i < numPoints; i++) { dataSet3.push( {x: dataSet1[i].x + dataSet2[i].x, y:dataSet1[i].y + dataSet2[i].y }); }
  updatePath(dataSet1,"a");
  updatePath(dataSet3,"c");
}

slider2.oninput = function() {
  val2 = this.value;
  multiplier2.innerHTML = this.value;
  const dataSet1 = [];
  const dataSet2 = [];
  const dataSet3 = [];
  for (let i = 0; i < numPoints; i++) { dataSet1.push( {x: i/100, y: Math.sin( val1 * i/100 ) } ); }
  for (let i = 0; i < numPoints; i++) { dataSet2.push( {x: i/100, y: Math.sin( val2 * i/100 ) } ); }
  for (let i = 0; i < numPoints; i++) { dataSet3.push( {x: dataSet1[i].x + dataSet2[i].x, y:dataSet1[i].y + dataSet2[i].y }); }
  updatePath(dataSet2,"b");
  updatePath(dataSet3,"c");
}
