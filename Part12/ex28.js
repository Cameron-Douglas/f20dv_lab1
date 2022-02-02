
//defining a function which takes in a link and a coloring order which will be used to select the coloring style

//coloring:"x" gives color scaling along the x axis and coloring:"y" gives scaling along the y axis

function barChart(link, coloring){

//Create the bar charts as done in previous exercises

  let barData = link

  const data = [];
  const leftLabels = [];

  d3.csv(barData, function(i) {
    return i;
  }).then(function(d){
    for(let i = 0; i<d.length; i++){
      data.push(parseInt(d[i].data));
  }

  for(let i = 0; i<data.length; i++){
    leftLabels.push(i+1);
  }

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

//Define two colors, color0 scales with the values of the data, and color1 scales with the number of elements

var myColor0 = d3.scaleLinear().domain([d3.min(data),d3.max(data)]).range(["blue", "red"]);
var myColor1 = d3.scaleLinear().domain([d3.min(leftLabels),d3.max(leftLabels)]).range(["green", "yellow"]);

//If the coloring passed to the function is "x" then, use color0 to represent the size of each bar by colors

    if(coloring == "x"){
      g.append("rect")
      .attr("width", function (d) {
        return d*scaleFactor;
      })
      .attr('fill', d=>myColor0(d))
      .attr("height", barHeight - margin)
    }
//If coloring == "y", then use color1 to represent the y axis by color

    if(coloring == "y"){
      g.append("rect")
      .attr("width", function (d) {
        return d*scaleFactor;
      })
      .attr('fill', (d,i)=>myColor1(i))
      .attr("height", barHeight - margin)
    }

    g.append("text")
    .attr("x", function (d) { return (scaleFactor * d); })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .style('text-anchor', 'end')
    .text(function (d) { return d; });

  var scale1 = d3.scaleLinear()
     .domain([0, d3.max(data)])
     .range([0,d3.max(data)*scaleFactor]);

  var scale2 = d3.scaleLinear()
    .domain([0, d3.max(leftLabels) - 1])
    .range([0,(d3.max(leftLabels)-1)*barHeight]);

// Add scales to axis

  var x_axis = d3.axisBottom()
   .scale(scale1)
   .ticks(20);

  var y_axis = d3.axisLeft()
    .scale(scale2)
    .ticks(5);

  svg.append("g")
    .call(x_axis).attr("transform", "translate(" + 40 + "," + (data.length*barHeight+10) +")");

    svg.append("g")
        .call(y_axis).attr("transform", "translate(30, 10)");
  });

}

//Call the bar chart functions with a link and a coloring scheme

barChart('https://raw.githubusercontent.com/cd94/f20dv_lab1/main/barData2.csv','x');

barChart('https://raw.githubusercontent.com/cd94/f20dv_lab1/main/barData3.csv','y');
