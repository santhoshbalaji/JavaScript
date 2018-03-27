function id(idd){
	return document.getElementById(idd);
}
var num;
var n;
var htmlElements;
var temp = 1;
var arrayvalue = 1;
var array = new Array();
var count =0;
function check(){
	arrayvalue = 1;
	array = [];
	for (var i = 0; i < num * num; i++) {	
		if(count < 2){
			array.push(arrayvalue);
			count++;
			//console.log(count);
		}
		if(count == 2){
			count = 0;
			arrayvalue++;
		} 
	}	
	for (var i = 0; i < num * num; i++ ){
		var random = Math.round(Math.random() * num * num);
		//console.log(random);
		if(random > num * num -1){
			random--;
		}
		if(random < 0){
			random++;
		}
		var arraytemp = array[i];
		array[i] = array[random];
		array[random] = arraytemp;	
	}
	for (var i = 0; i < num * num; i++ ){
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);	
		htmlElements += "<div class='div' onclick = 'start(this,"+array[i]+")' id = 'div"+temp+"' style = 'border:1px solid rgb("+r+","+g+","+b+");color:rgb("+b+","+g+","+r+");'>"+array[i]+"</div>";
		temp++;	
	}
	id("display").innerHTML = htmlElements;
}
function play(){
	num = parseInt(id("input").value);
	htmlElements = "";
	if(num % 2 == 0){
		check();
	}
	n = parseInt((num * 100) + (num + num) + (num * 10));
	id("display").style.width = n+"px";	 
}
var tempcount = 1;
var tempdiv = "";
var tempvalue = "";
var score = 0 ;
function start(currentdiv,value){
	if(tempcount == 0){
		tempdiv = currentdiv;
		tempvalue = value;
		tempcount++;
		currentdiv.style.fontSize = "30px";
		console.log(value);
	}
	else if(tempcount > 1){
		console.log(value);
		currentdiv.style.fontSize = "30px";
		if(value != tempvalue){
			setTimeout(function(){
				currentdiv.style.fontSize = "0px";
				tempdiv.style.fontSize = "0px";
				tempcount = 0;
				console.log("wrong");
			},1000);	
		}
		else if(value == tempvalue){
			currentdiv.style.fontSize = "30px";
			tempdiv.style.fontSize = "30px";
			tempcount = 0;
			console.log("right");
			//score++;
		}
	}
	if(tempcount == 1){
		tempdiv = currentdiv;
		tempvalue = value;
		tempcount++;
		tempdiv.style.fontSize = "30px";
		console.log(value);
	}
	id("input").value = '';
}