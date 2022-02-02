let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
/*
age,anaemia,creatinine_phosphokinase,diabetes,ejection_fraction,high_blood_pressure,platelets,serum_creatini
ne,serum_sodium,sex,smoking,time,DEATH_EVENT
75,0,582,0,20,1,265000,1.9,130,1,0,4,1
55,0,7861,0,38,0,263358.03,1.1,136,1,0,6,1
65,0,146,0,20,0,162000,1.3,129,1,1,7,1
50,1,111,0,20,0,210000,1.9,137,1,0,7,1
*/

/*Imports the data and draws the bar chart as described in ex14.js */

d3.csv(heartfailurecsv, function(data) {
 return data
}).then(function(d){
  let oneThirty = 0;
  let thirtyFourty = 0;
  let fourtySixty = 0;
  let sixtyOneHundered= 0;

  var counts = [];

  for(let i = 0; i<d.length; i++){
    if(d[i].age >= 1 && d[i].age <= 30 ){
      oneThirty++;
    };
    if(d[i].age >= 31 && d[i].age <= 40 ){
      thirtyFourty++;
    };
    if(d[i].age >= 41 && d[i].age <= 60 ){
      fourtySixty++;
    };
    if(d[i].age >= 61 && d[i].age <= 100 ){
      sixtyOneHundered++;
    };
  };
  counts.push(oneThirty);
  counts.push(thirtyFourty);
  counts.push(fourtySixty);
  counts.push(sixtyOneHundered);

	var width = 400;
  var scaleFactor = 2;
  var barHeight = 30;

  var graph = d3.select("body")
   .append("svg")
   .attr("width", width)
   .attr("height", barHeight * counts.length);

  var bar = graph.selectAll("g")
   .data(counts)
   .enter()
   .append("g")
   .attr("transform", function(d, i) {
   return "translate(0," + i * barHeight + ")";
   });

/*When appending the rect elements, the color is slsected based on the value from the csv
if the value is >100 but <150, the bar is orange, >150 it is red and <100 it is green*/

  bar.append("rect")
   .attr("width", function(d) {
   if(d > 100 && d < 150){
   	d3.select(this).style("fill","orange");
   }

   if(d > 150){
   	d3.select(this).style("fill","red");
   }

   if(d < 100){
   	d3.select(this).style("fill","green");
   }
   return d * scaleFactor;
   })
   .attr("height", barHeight - 1);


  bar.append("text")
   .attr("x", function(d) { return (d*scaleFactor); })
   .attr("y", barHeight / 2)
   .attr("dy", ".35em")
   .text(function(d) { return d; });

 	});
