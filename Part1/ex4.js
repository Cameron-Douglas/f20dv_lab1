for(let i = 0; i<10; i++){
	if(i<5){
 		let newdiv = d3.select("body").append('div').style('color','red');
 		newdiv.text(i);
    }
    else{
    let newdiv = d3.select("body").append('div').style('color','green');
 		newdiv.text(i);
    }
 }
 d3.select("div").style('color','purple').text("start");
