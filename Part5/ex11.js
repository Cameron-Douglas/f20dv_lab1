//Create SVG element

var svg = d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", '1px solid green');

//Create line elements and append them to the SVG to form a box

svg.append("line")
    .attr("x1", 100)
    .attr("x2", 200)
    .attr("y1", 50)
    .attr("y2", 50)
    .attr("stroke", "blue")
    .attr("stroke-width",3);

svg.append("line")
    .attr("x1", 100)
    .attr("x2", 200)
    .attr("y1", 150)
    .attr("y2", 150)
    .attr("stroke", "green")
    .attr("stroke-width",3);

 svg.append("line")
    .attr("x1", 100)
    .attr("x2", 100)
    .attr("y1", 50)
    .attr("y2", 150)
    .attr("stroke", "red")
    .attr("stroke-width",3);

 svg.append("line")
    .attr("x1", 200)
    .attr("x2", 200)
    .attr("y1", 50)
    .attr("y2", 150)
    .attr("stroke", "yellow")
    .attr("stroke-width",3);
