//Create an array of numbers
let num = [1, 25, 50, 75, 100, 125, 150, 175, 200];

//Create variables for the sliders by getting elements by ID

var lowSlider = document.getElementById("lowSlider");
var highSlider = document.getElementById("highSlider");

//Creating variables for the slider values

var lowVal = lowSlider.value;
var highVal = highSlider.value;

//Setting the text of the value indicator to the value of the slider

var lowOut = document.getElementById("Low");
var highOut = document.getElementById("High");
lowOut.innerHTML = lowSlider.value;
highOut.innerHTML = highSlider.value;

//Update the current slider value (each time you drag the slider handle) and altering the color of the div elements
lowSlider.oninput = function() {
  lowVal = this.value;
  lowOut.innerHTML = this.value;

  d3.select("body")
    .selectAll("div")
    .style("color", function(d, i) {
    if (lowVal < d) {
    return "red";
    } else {
    return "blue";
     }
    });
}

highSlider.oninput = function() {
  highVal = this.value;
  highOut.innerHTML = this.value;

  d3.select("body")
    .selectAll("div")
    .style("color", function(d, i) {
    if (highVal >= d ) {
    return "red";
    } else {
    return "blue";
     }
    });
}

//Appending the values to the div for the first loading of the page

let paragraph = d3.select("body")
 .selectAll("div")
 .data(num)
 .text(function (d, i) {
 return 'cont:' + d;
 })
 .style("color", function(d, i) {
 if (highVal >= d ) {
 return "red";
 } else {
 return "blue";
  }
 });
