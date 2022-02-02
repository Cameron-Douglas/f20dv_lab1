//Create an array of numbers
let num = [10, 50, 100, 200];

/*Select all div elements and set their text to be the values in the num array
Change the color of the text depending on the value*/


let paragraph = d3.select("body")
 .selectAll("div")
 .data(num)
 .text(function (d, i) {
 return 'cont:' + d;
 })
 .style("color", function(d, i) {
 if ( 50<= d && 100 >= d ) {
 return "red";
 } else {
 return "yellow";
  }
 });
