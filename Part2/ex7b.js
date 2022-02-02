
//Create an array of numbers
let num = [1, 25, 50, 75, 100, 125, 150, 175, 200];

/*Select all div elements and set their text to be the values in the num array
Change the color of the text depending on the value*/


var lowSlider = document.getElementById("lowSlider");
var highSlider = document.getElementById("highSlider");

var lowVal = lowSlider.value;
var highVal = highSlider.value;

var lowOut = document.getElementById("Low");
var highOut = document.getElementById("High");

lowOut.innerHTML = lowSlider.value;
highOut.innerHTML = highSlider.value;

// Update the current slider value (each time you drag the slider handle)
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
