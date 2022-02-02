var bodyElement = d3.select("body");
var div = bodyElement.append("div");
div.text("Hello World!");
div.style('color','green');

//re writing the above code using chaining

d3.select("body").append("div").text("Hello World!").style("color","green");
