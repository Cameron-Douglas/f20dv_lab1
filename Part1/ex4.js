for(let i = 0; i<10; i++){
	if(i<5){
 		let newdiv = d3.select("body").append('div').style('color','red');
 		newdiv.text(i+1);
    }
    else{
    let newdiv = d3.select("body").append('div').style('color','green');
 		newdiv.text(i+1);
    }
 }

 //select the first div element and change its text to start and color to purple

 d3.select("div").style('color','purple').text("start");
