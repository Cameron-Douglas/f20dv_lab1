//Create an array of both numbers and characters
var myData = ['a', 4, 1, 'b', 6, 2, 8, 9, 'z' ];

/*Select all p elements, as there are none the enter() function will enter the number of
spans equal to the number of elements in the data array. Then sets the color of the span
depending on wether it contains a character or a number*/

var span = d3.select("body")
 .selectAll("p")
 .data(myData)
 .enter()
 .append('span')
 .text(function (d, i) {
 return d;
 }).style('color',function(d,i){
 if(typeof d === 'number'){
 	i = 'green'
 }else{
  i = 'blue'
 }
 return i
 });
