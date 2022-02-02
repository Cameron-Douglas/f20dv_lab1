const width = 550;
const height = 200;
const data = [10, 15, 20, 25, 30];

//Declare a const array of colors

const colors = ['#ffffcc','red','rgb(0,255,0)','#31a354','#006837'];


const svg = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height)
.style("border", '2px solid DarkSlateGrey');

//Declares placeholder array and integer to aid with enter and exiting

let arr = [0];
let i = 0;

//Function updateEnter() is called on button press and adds the next circle in the data array

function updateEnter(){
  const g = svg.selectAll("g")
  .data(arr)
  .enter()
  .append("g")
  .attr("transform", "translate(0,0)");

  g.append("circle")
  .attr("cx", i*100 +50)
  .attr("cy", 100)
  .attr("r", data[i]*1.5)
  .attr("fill",  colors[i]);

  g.append("text")
  .attr("x", i * 100 + 40)
  .attr("y", 105)
  .attr("stroke", "teal")
  .attr("font-size", "12px")
  .attr("font-family", "sans-serif")
  .text(data[i]);

  i++;

  if(arr.length < data.length){
    arr.push(i);
  }
}

//Function updateExit() is called on button press and removes the most recently added circle

function updateExit(){
  if(arr !== []){
    arr.pop();
  }
  i--;

  var p = d3.select("svg")
    .selectAll("g")
    .data(arr)
    .exit()
    .remove();

  if(arr.length == 0){
    arr = [0];
    i = 0;
  }
}
