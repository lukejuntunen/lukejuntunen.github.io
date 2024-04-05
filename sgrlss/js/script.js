// Javascript Document

var colors = ["#000", "#999", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];

var repeat;

function colorSwap(){
	var color = Math.random() * 8;
	document.getElementById('header').style.color = colors[Math.floor(color)];
	repeat = setTimeout(function(){colorSwap()}, 500);
}