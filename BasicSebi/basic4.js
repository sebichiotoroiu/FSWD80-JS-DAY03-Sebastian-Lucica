
document.write("<br>");
var random = Math.floor((Math.random()*45)-5);
console.log(random);
var i = random;
if (32 < i) {
  document.write("The weather is hot:" + random + "deg" + '<img src="https://cdn.pixabay.com/photo/2017/10/01/17/08/landscape-2806202__340.jpg" width="80%">');
}
else {

if (i < 32)
document.write("The weather is moderate:" + random + "deg" + '<img src="https://cdn.pixabay.com/photo/2013/11/24/10/18/earth-216834__340.jpg" width="80%">');
}

