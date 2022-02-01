let barData = 'https://raw.githubusercontent.com/cd94/f20dv_lab1/main/barData2.csv';

const data = [];

d3.csv(barData, function(i) {
  return i;
}).then(function(d){
  for(let i = 0; i<d.length; i++){
    data.push(parseInt(d[i].data));
  }

  console.log(data);
  const width = 500;
  const barHeight = 20;
  const margin = 1;
  var scale = d3.scaleLinear()
  .domain([d3.min(data), d3.max(data)])
  .range([50, 500]);
  var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length);
  var g = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function (d, i) {
    return "translate(0," + i * barHeight + ")";
  });

  g.append("rect")
  .attr("width", function (d) {
    return scale(d);
  })
  .attr('fill', function(d){
    if(d < 100){
      return "green";
    } else if(d > 500){
      return "red";
    } else{
      return "blue";
    };
  })
  .attr("height", barHeight - margin)


  g.append("text")
  .attr("x", function (d) { return (scale(d)); })
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .style('text-anchor', 'end')
  .text(function (d) { return d; });

})
