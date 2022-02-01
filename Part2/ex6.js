let otherdata = [ {name:'test', val:1, color:"blue"},
 {name:'other', val:2, color:"red"},
 {name:'b', val:3, color:"green"}];
let paragraph = d3.select("body")
 .selectAll("div")
 .data(otherdata)
 .text(function (d, i) {
 return 'cont: ' + d.name + ', colour: ' + d.color; // return value is used to set the 'text'
}).style("color", d=>d.color);
