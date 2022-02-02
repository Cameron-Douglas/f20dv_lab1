let svgscene = 'https://raw.githubusercontent.com/cd94/f20dv_lab1/main/shape.csv';
/*
shape,dim1,dim2,pos1,pos2,color
rect,200,100,0,0,pink
circle,50,0,250,50,green
ellipse,150,50,250,150,blue
line,100,200,50,150,yellow
*/
let data = null;
d3.csv(svgscene, function(data) {
 return data;
}).then(function(d){
  var svg = d3.select("body")
     .append("svg")
     .attr("width", 400)
     .attr("height", 400)
     .style("border", '1px solid green');

let arr = [1];

 for(let i = 0; i<d.length; i++){

//Uses the switch case as before, but this time uses the enter function to add the SVG elements

	switch(d[i].shape){
  	case "rect":
    var rect = d3.select("svg")
    .selectAll("p")
    .data(arr)
    .enter()
       .append("rect")
       .attr("x", d[i].pos1)
       .attr("y", d[i].pos2)
       .attr("width", d[i].dim1)
       .attr("height", d[i].dim2)
       .attr("fill", d[i].color);
       break;

    case "circle":
    var circle = d3.select("svg")
      .selectAll("p")
      .data(arr)
      .enter()
         .append("circle")
         .attr("cx", d[i].pos1)
         .attr("cy", d[i].pos2)
         .attr("r", d[i].dim1)
         .attr("fill", d[i].color);
         break;

    case "ellipse":
    var ellipse = d3.select("svg")
      .selectAll("p")
      .data(arr)
      .enter()
         .append("ellipse")
         .attr("cx", d[i].pos1)
         .attr("cy", d[i].pos2)
         .attr("rx", d[i].dim1)
         .attr("ry", d[i].dim2)
         .attr("fill", d[i].color);
         break;

     case "line":
     var line = d3.select("svg")
     .selectAll("p")
     .data(arr)
     .enter()
      .append("line")
       .attr("x1", d[i].pos1)
       .attr("x2", d[i].pos2)
       .attr("y1", d[i].dim1)
       .attr("y2", d[i].dim2)
       .attr("stroke", d[i].color)
       .attr("stroke-width",3);
				break;
		}
  }
  data = arr;
});

//UpdateEnter() Function is called when the enter button is pressed and enters an ellipse to the SVG

function updateEnter(){
  var ellipse = d3.select("svg")
    .selectAll("p")
    .data(data)
    .enter()
       .append("ellipse")
       .attr("cx", 210)
       .attr("cy", 250)
       .attr("rx", 100)
       .attr("ry", 100)
       .attr("fill", "purple");
  };

//UpdateExit() Function is called when the exit button is pressed and exits the ellipse created by the UpdateEnter() function

function updateExit(){
  var p = d3.select("svg")
    .selectAll("ellipse")
    .data(data)
    .exit()
    .remove();
  };
