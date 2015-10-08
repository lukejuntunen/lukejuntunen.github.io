// JavaScript Document
var width = 5760;
var height = 3240;
var midx = width/2;
var midy = height/2;
var whichAngle = 0;
var moveH = 0;
var moveV = 0;
var iW=window.innerWidth/2;
var xDisplacement = (5760/2) - iW;
function switches(e){
	var x = e.pageX;
	var y = e.pageY;
	var centX = width/2;
	var centY = height/2;
	var eyyray = ["right", "up", "up", "left", "left", "down", "down", "right"];
	var cursArray = ["e-resize", "n-resize", "n-resize", "w-resize", "w-resize", "s-resize", "s-resize", "e-resize"];
	var sideA = x - (width/2);
	var sideB = y - (height/2);
	if(y < midy && x < midx){
		var angleA = Math.atan(sideA/sideB);
		var angle = Math.abs(angleA * (180/Math.PI));
		angle = angle + 90;
	}
	else if(y > midy && x < midx){
		var angleA = Math.atan(sideB/sideA);
		var angle = Math.abs(angleA * (180/Math.PI));
		angle = angle + 180;
	}
	else if(y > midy && x > midx){
		var angleA = Math.atan(sideA/sideB);
		var angle = Math.abs(angleA * (180/Math.PI));
		angle = angle + 270;
	}
	else if(y == midy && x < midx){
		angle = 180;
	}
	else if(y > midy && x == midx){
		angle = 270;
	}
	else{
	   var angleA = Math.atan(sideB/sideA);
	   var angle = Math.abs(angleA * (180/Math.PI));
	}
	document.getElementById('read').innerHTML = moveV;
	document.getElementById('eyes').src = "images/" + eyyray[Math.floor(angle/45)] + ".jpg";
	document.getElementById('mid').style.cursor = cursArray[Math.floor(angle/45)];
	if (angle >= 45 && angle < 135){
		whichAngle = 1;
		moveV -= 1;
		moveH=0;
	}
	else if(angle >= 135 && angle < 225){
		whichAngle = 2;
		moveV=0;
		moveH -= 1;
	}
	else if(angle >= 225 && angle < 315){
		whichAngle = 3;
		moveV += 1;
		moveH=0;
	}
	else{
		whichAngle = 4;
		moveV=0;
		moveH += 1;
	}
}

function pageScroll() {
	window.scrollBy(moveH, moveV);
	delay = setTimeout('pageScroll()',100);
}

function backHome(){
	window.scrollTo(xDisplacement, 1080);
	moveH = 0;
	moveV = 0;
	clearTimeout(delay);
}

document.onmousemove = switches;
document.onLoad = window.scroll(xDisplacement, 1080);