function keyDownMusic(k){
	var x= k.keycode || k.which;
	var t=document.getElementById("sounds"+x);
	document.getElementById("sub"+x).style.transform = "scale(1.4)";
	t.currentTime=0;
	t.play();
}	
function KeyUpMusic(k){
	var x= k.keycode || k.which;		
	document.getElementById("sub"+x).style.transform = "scale(1)";
}	
	
