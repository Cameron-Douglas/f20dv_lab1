let newdiv = d3.select("body").append('div');
let text = "d3 version: " + d3.version;
newdiv.text(text);
console.log('d3.version:', d3.version);
