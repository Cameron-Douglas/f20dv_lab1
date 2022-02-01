var bodyElement = d3.select("body");
var div = bodyElement.append("div");
div.text("Hello World!");
div.style('color','green')
// same as
d3.select("body").append("div").text("Hello World!");
