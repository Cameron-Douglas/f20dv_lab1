let titaniccsv = 'https://raw.githubusercontent.com/dsindy/kaggle-titanic/master/data/test.csv';
/*
PassengerId,Pclass,Name,Sex,Age,SibSp,Parch,Ticket,Fare,Cabin,Embarked
892,3,"Kelly, Mr. James",male,34.5,0,0,330911,7.8292,,Q
893,3,"Wilkes, Mrs. James (Ellen Needs)",female,47,1,0,363272,7,,S
894,2,"Myles, Mr. Thomas Francis",male,62,0,0,240276,9.6875,,Q
895,3,"Wirz, Mr. Albert",male,27,0,0,315154,8.6625,,S
*/

d3.csv(titaniccsv, function(data) {
	return data;
}).then(function(d){
	let mrCount = 0;
  let mrsCount = 0;
  let maleCount = 0;
  let femaleCount = 0;

  for(let i = 0; i<d.length; i++){
    if(d[i].Name.includes("Mr.")){
      mrCount++;
    };
    if(d[i].Name.includes("Mrs.")){
      mrsCount++;
    };
    if(d[i].Sex === "male"){
      maleCount++;
    };
    if(d[i].Sex.includes("female")){
      femaleCount++;
    };
  };
	let paragraph = d3.select("body")
	 .selectAll("div")
	 .text("Mr: " + mrCount + "," + " Mrs: " + mrsCount + "," + " Male: " + maleCount + "," + " Female: " + femaleCount);

});
