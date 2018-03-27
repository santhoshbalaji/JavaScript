function id(idd){
	return document.getElementById(idd);
}
var name,a,b,c;
function KeyDwn(e,ele){
	a = '';
	b = '';
	c = '';

}
	var element,balla,ballb,ballc;
	var boo = false; 
	var tempa;
	var tempb;
function KeyMove(e,ele){

	var j = e.which || e.key;
	 if(j == "ArrowRight" && boo){
	 	if(tempa < element.parentNode.offsetLeft + element.parentNode.clientWidth){
	 		tempa++;	 		
	 	}
		element.style.left = tempa+"px";
		colorChange();	
	 }
	 else if(j == "ArrowLeft" && boo){
	 	if(tempa > element.parentNode.offsetLeft + (element.clientWidth/2)){
	 		tempa--;	 		
	 	}
	 	element.style.left = tempa+"px";
	 	colorChange();
	 }

}
function Move(e,ele){
	tempa = ele.parentNode.offsetLeft + (ele.clientWidth/2);
	tempb = ele.parentNode.offsetLeft + (ele.clientWidth/2);
	boo = true;
	var x = e.clientX;
	element = ele;
	document.body.backgroundColor = "lime";
	if(x > (ele.parentNode.offsetLeft + (ele.clientWidth/2)) && x < (ele.parentNode.offsetLeft + ele.parentNode.clientWidth)){
			ele.style.left = (x - 8)+"px";
			colorChange();
	}
}
function colorChange(){
	balla = id('ball1').offsetLeft;
	ballb = id('ball2').offsetLeft;
	ballc = id('ball3').offsetLeft;
	console.log(balla+","+tempb)
	var classname = document.getElementsByClassName('hex');
	classname[0].style.borderBottomColor = "rgb("+(balla - tempb)+","+(ballb - tempb)+","+(ballc - tempb)+")";
	classname[1].style.backgroundColor = "rgb("+(balla - tempb)+","+(ballb - tempb)+","+(ballc - tempb)+")";
	classname[2].style.borderTopColor = "rgb("+(balla - tempb)+","+(ballb - tempb)+","+(ballc - tempb)+")";
	id('RGB1').innerHTML = "rgb("+(balla - tempb)+","+(ballb - tempb)+","+(ballc - tempb)+")";
	// id('RGB1').style.color = "rgb("+(balla - tempb)+","+(ballb - tempb)+","+(ballc - tempb)+")";
}
