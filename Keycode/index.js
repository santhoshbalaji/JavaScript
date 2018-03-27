function KeyPress(k){
	var key = k.key;
	var keycode = k.keycode || k.which;
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	document.getElementById('whole').innerHTML = keycode;
	document.body.style.background = "rgba("+r+","+g+","+b+",0.4)";
	document.getElementById('result').innerHTML = key;
	//document.getElementsByTagName("h1")[0].style.color = "rgb("+b+","+g+","+r+")";
	document.getElementsByTagName("div")[0].style.color = "rgb("+g+","+r+","+b+")";
	document.getElementsByTagName("div")[1].style.color = "rgb("+b+","+g+","+r+")";
	document.getElementsByTagName("h1")[0].style.visibility = "hidden";
	//document.getElementById('result').style.border = "1px solid lavender";

}