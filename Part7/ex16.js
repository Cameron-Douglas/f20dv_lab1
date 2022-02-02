const width = 500;
const height = 500;
const data = [10, 15, 20, 25, 30];

//Declare a const array of colors

const colors = ['#ffffcc','red','rgb(0,255,0)','#31a354','#006837'];


const svg = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height);

const g = svg.selectAll("g")
.data(data)
.enter()
.append("g")
.attr("transform", function(d, i) {
  return "translate(0,0)";
});

/*Appends circle elements to the SVG with x position relative to the position in the data array,
the y position is fixed, the radius of the circle is then proportional to the values in the array
and the color is taken as the same position in the color array as in the data array */

g.append("circle")
.attr("cx", function(d, i) {
  return i*100 + 50;
})
.attr("cy", function(d, i) {
  return 100;
})
.attr("r", function(d) {
  return d*1.5;
})
.attr("fill", function(d, i){
  return colors[i];
});

g.append("text")
.attr("x", function(d, i) {
  return i * 100 + 40;
})
.attr("y", 105)
.attr("stroke", "teal")
.attr("font-size", "12px")
.attr("font-family", "sans-serif")
.text(function(d) {
  return d;
});

/*Rect elements are then added in the same way as the circle elements*/

g.append("rect")
.attr("x", function(d, i) {
  return i*100 + 50;
})
.attr("y", function(d, i) {
  return 300;
})
.attr("width", function(d) {
  return d*1.5;
})
.attr("height", function(d) {
  return d*1.5;
})
.attr("fill",function(d, i){
  return colors[i];
});

g.append("text")
.attr("x", function(d, i) {
  return i * 100 + 55;
})
.attr("y", 315)
.attr("stroke", "teal")
.attr("font-size", "12px")
.attr("font-family", "sans-serif")
.text(function(d) {
  return d;
});
