//Javascript Doc

var movement = 0;
function watchVid(){
	movement = -25;
	window.scrollBy(0, movement);
	delay = setTimeout('watchVid()',25);
	if(window.scrollY == 0){
	clearTimeout(delay);
	/*document.getElementById('nav').style.opacity = "0.1";*/
	movement = 0;
	document.getElementById('thisVideo').muted = false;
	document.getElementById('thatVideo').muted = true;
	document.getElementById('vid').style.opacity = "1";
	document.getElementById('returnToFront').style.opacity = "1";
	}
}

function returnTo(){
if(scrollY > 1500){
		movement = -25;
		window.scrollBy(0, movement);
		delay = setTimeout('returnTo()',25);
		if(window.scrollY <= 1500){
			clearTimeout(delay);
			document.getElementById('thatVideo').muted = true;
			document.getElementById('vid').style.opacity = "0.5";
			document.getElementById('returnToFront').style.opacity = "0";
		}
	}
else{
		movement = 25;
		window.scrollBy(0, movement);
		delay = setTimeout('returnTo()', 25);
		if(window.scrollY >= 1485){
			clearTimeout(delay);
			document.getElementById('thisVideo').muted = true;
			document.getElementById('vid').style.opacity = "0.5";
			document.getElementById('returnToFront').style.opacity = "0";
		}
	}
}
function watchVid2(){
	movement = 25;
	window.scrollBy(0, movement);
	delay = setTimeout('watchVid2()',25);
	if(window.scrollY >= 3000){
		clearTimeout(delay);
		movement = 0;
		document.getElementById('thatVideo').muted = false;
		document.getElementById('thisVideo').muted = true;
		document.getElementById('vid').style.opacity = "0";
		document.getElementById('vid2').style.opacity = "1";
		document.getElementById('returnToFront').style.opacity = "1";
	}
}


function up370(){
	document.getElementById('nav370').style.opacity = "1";
}
function down370(){
	document.getElementById('nav370').style.opacity = "0";
}


function upMal(){
	document.getElementById('quakeNav').style.opacity = "1";
}
function downMal(){
	document.getElementById('quakeNav').style.opacity = "0";
}