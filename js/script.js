// Javascript Document
// Coded with love by Luke Juntunen

var web = document.getElementsByClassName('web');
var video = document.getElementsByClassName('video');
var sculpt = document.getElementsByClassName('sculpt');
var grid = document.getElementsByClassName('grid_3');
var state = document.getElementsByClassName('statement');
function resetAll(){
	var k;
	for(k = grid.length - 1; k >= 0; k--){
		grid[k].style.opacity = '1';
	}
	state[0].style.opacity = '0';
	state[0].style.zIndex = "-10000";
}
function webHighlight(){
	var i;
	var j;
	var k;
	state[0].style.opacity = '0';
	for(k = grid.length - 1; k >= 0; k--){
		grid[k].style.opacity = '1';
	}
	for(i = video.length - 1; i >= 0; i--){
		video[i].style.opacity = '.10';
	}
	for(j = sculpt.length - 1; j >= 0; j--){
		sculpt[j].style.opacity = '.10';
	}
	state[0].style.zIndex = "-10000";
}
function videoHighlight(){
	var i;
	var j;
	var k;
	state[0].style.opacity = '0';
	for(k = grid.length - 1; k >= 0; k--){
		grid[k].style.opacity = '1';
	}
	for(i = web.length - 1; i >= 0; i--){
		web[i].style.opacity = '.10';
	}
	for(j = sculpt.length - 1; j >= 0; j--){
		sculpt[j].style.opacity = '.10';
	}
	state[0].style.zIndex = "-10000";
}
function sculptHighlight(){
	var i;
	var j;
	var k;
	state[0].style.opacity = '0';
	for(k = grid.length - 1; k >= 0; k--){
		grid[k].style.opacity = '1';
	}
	for(i = video.length - 1; i >= 0; i--){
		video[i].style.opacity = '.10';
	}
	for(j = web.length - 1; j >= 0; j--){
		web[j].style.opacity = '.10';
	}
	state[0].style.zIndex = "-10000";
}
function statementGet(pgSrc){
	document.getElementById('frame').src = pgSrc + '.html';
	var k;
	for(k = grid.length - 1; k >= 0; k--){
		grid[k].style.opacity = '0';
	}
	state[0].style.opacity = '.8';
	state[0].style.zIndex = "1000";
	 $('html, body').animate({ scrollTop: 0 }, 'slow');
}
function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height= (newheight) + "px";
    document.getElementById(id).width= (newwidth) + "px";
}