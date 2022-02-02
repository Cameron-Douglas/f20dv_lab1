//Create an array of objects with key value pairs
let otherdata = [ {name:'test', val:1, color:"blue"},
 {name:'other', val:2, color:"red"},
 {name:'b', val:3, color:"green"}];

/*Select all the div elements within the body and set the text to the contents
of the otherData array, then change the color to be the color defined. */

let paragraph = d3.select("body")
 .selectAll("div")
 .data(otherdata)
 .text(function (d, i) {
 return 'cont: ' + d.name + ', val: ' + d.val + ', colour: ' + d.color;
}).style("color", d=>d.color);
