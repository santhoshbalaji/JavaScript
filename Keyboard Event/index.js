document.getElementById("whole").innerHTML = "";
var i = 0,audio;
function Press(op){
	var e = op.key ;
	console.log(e);
	var div = "div"+e;
	i++;
	audio = new Audio("0.wav");
	audio.play();
	audio = 0;
	document.getElementById("whole").innerHTML += "<div class = 'key' id = '"+div+"'transform = 'scale(1.2)'>"+e+"</div>";
	if(i == 9){
		i = "";
		stop();
		console.log(i);
	}
	console.log("div"+e+"");
}
function stop(){
	audio = "";
}