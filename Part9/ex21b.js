
const dataSet = [];
let leftLabels = [];
let val = document.getElementById("input").value;

let counter1 = [1];
let counter2 = [1,2];
let i = 0;

function whenPressed(){
  val = document.getElementById("input").value;
  dataSet.push(parseInt(val));
  console.log(dataSet[i]);

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


/*Adds data to the data arry and then adds the number of elements of the data array to the leftLabels array
i.e. if data has 5 elements, leftLabels will contain [1,2,3,4,5] */

let arr = [0];

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

    g.append("rect")
    .attr("width", function (d) {
      return d*scaleFactor;
    })
    .attr('fill', function(d){
      if(d < 100){
        return "green";
      } else if(d > 500){
        return "red";
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

if(dataSet.length != 0){
  drawChart(dataSet);
}
