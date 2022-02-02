//Loop 10 times
for(let i = 0; i<10; i++){
	if(i<5){

		/*Add a new div with the text set to the numbers less than 5 and change
		their color to red */

 		let newdiv = d3.select("body").append('div').style('color','red');
 		newdiv.text(i);
    }
    else{
		//Add the numbers from 5 to 9 and change their color to green
    let newdiv = d3.select("body").append('div').style('color','green');
 		newdiv.text(i);
    }
 }
