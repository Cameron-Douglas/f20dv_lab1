const dataSet = [];
let leftLabels = [];

//Getting Slider and input elements and creating variables to store their values

let val = document.getElementById("input").value;

let counter1 = [1];
let counter2 = [1,2];
let i = 0;

var green = document.getElementById("green");

var val1 = green.value;

var limit1 = document.getElementById("Limit1");
limit1.innerHTML = green.value;

var red = document.getElementById("red");

var val2 = red.value;

var limit2 = document.getElementById("Limit2");
limit2.innerHTML = red.value;

//Called when submit button is pressed, update the dataSet, displays the current content of dataSet, and calls UpdateChart() giving it the updated dataSet

function whenPressed(){
  val = document.getElementById("input").value;
  dataSet.push(parseInt(val));

  var p = d3.select("div")
    .selectAll("span")
    .data(counter1)
    .exit()
    .remove();

  var p = d3.select("div")
    .selectAll("span")
    .data(counter2)
    .enter()
    .append()
    .text(function(d) {return " " + dataSet[i] + " "  });

  document.getElementById('input').value = '';

  i++;
  counter1.push(i);
  updateChart(dataSet);
}

//Placeholder array for exiting elements

let arr = [0];

//Function updateChart(), exits the old SVG and calls drawChart with the new dataSet

function updateChart(data){
  if(arr !== []){
    arr.pop();
  }
  var p = d3.select("body")
    .selectAll("svg")
    .data(arr)
    .exit()
    .remove();

  drawChart(data);
}

//Draws the axes and chart given a data array

function drawChart(data){

  arr = [0];
  leftLabels = [];

  for(let i = 0; i<data.length; i++){
    leftLabels.push(i+1);
  }
  //Create the bar chart as before

    const width = 600;
    const barHeight = 20;
    const scaleFactor = 0.5;
    const margin = 1;

    var scale = d3.scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([d3.min(data), d3.max(data)]);

    var svg = d3.select("body")
    .append("svg")
    .attr("width", width + 40)
    .attr("height", (barHeight * data.length)+30);

    var g = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g")

    .attr("transform", function (d, i) {
      return "translate(40," + (i * barHeight) + ")";
    });

//Checks the value of d against the current values provided by the sliders to return a color

    g.append("rect")
    .attr("width", function (d) {
      return d*scaleFactor;
    })
    .attr('fill', function(d){
      if(d < val1){
        return "#228B22";
      } else if(d >= val2){
        return "#DC143C";
      } else{
        return "blue";
      };
    })
    .attr("height", barHeight - margin)


    g.append("text")
    .attr("x", function (d) { return (scaleFactor * d); })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .style('text-anchor', 'end')
    .style('font-family','monospace')
    .text(function (d) { return d; });

  //Creates two scales for the two axes

  var scale1 = d3.scaleLinear()
     .domain([0, d3.max(data)])
     .range([0,d3.max(data)*scaleFactor]);

  var scale2 = d3.scaleLinear()
    .domain([0, d3.max(leftLabels) - 1])
    .range([0,(d3.max(leftLabels)-1)*barHeight]);

  //Scale the axes and define the number of ticks

  var x_axis = d3.axisBottom()
   .scale(scale1)
   .ticks(data.length+1);

  var yticks = (leftLabels.length-1);
  var y_axis = d3.axisLeft()
    .scale(scale2)
    .ticks(yticks);

  //Append the two axes to the SVG and set their position

  svg.append("g")
    .call(x_axis).attr("transform", "translate(" + 40 + "," + (data.length*barHeight+10) +")");

  svg.append("g")
      .call(y_axis).attr("transform", "translate(30,10)");
};

//oninput functions for the two sliders, when their values are updated, set the value of val1 or val2 and calls updateChart()

green.oninput = function() {
  val1 = this.value;

//Setting the max value of this slider to be val2 so there is no overlap between the sliders

  this.max = val2-1;
  limit1.innerHTML = this.value;

  updateChart(dataSet);
}


red.oninput = function() {
  val2 = this.value;

//Setting the min value of this slider to be val1 so there is no overlap between the sliders

  this.min = val1;
  limit2.innerHTML = this.value;

  updateChart(dataSet);
}
