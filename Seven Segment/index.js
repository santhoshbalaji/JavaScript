var array = ["1,1,1,1,1,1,0","0,1,1,0,0,0,0","1,1,0,1,1,0,1","1,1,1,1,0,0,1","0,1,1,0,0,1,1","1,0,1,1,0,1,1","1,0,1,1,1,1,1"
				,"1,1,1,0,0,0,0,0","1,1,1,1,1,1,1","1,1,1,1,0,1,1"];
var temp = new Array();
var count;
var count1;
var count2,count3;
var value = true;
function start(k){
	var keybtn = k.keycode || k.which;
	if(keybtn == 13 && value){
		begin();
		count2 = 0;
		count3 = 0;
		value = false;
	}
}
function begin(){
	count = 0;
	count1 = 0;
	single();
	dual();
}
function minbegin(){
	minsingle();
	mindual();
}
function single(){
	changeColor('d',count);
	count++;
	if(count == 10){
		dual();
		count = 0;
	}
	timer();
}	
function dual(){
	changeColor('c',count1);
	if(count == 0){
		count1++;
	}
}
function minsingle(){
	changeColor('b',count2);
	if(count2 == 10){
		mindual();
		count2 = 0;
	}
}	
function mindual(){
	changeColor('a',count3); 
	if(count2 == 0){
		count3++;
	}
}
function changeColor(idd,cnt){
	var tempvalue = 0;
	for(var j = 0; j < 7; j++){
		if(tempvalue <= 7){
			tempvalue++;
		}
		temp = array[cnt].split(',');
		if(temp[j] == 1){
			document.getElementById(idd+tempvalue).style.backgroundColor = "white";
		}
		else{
			document.getElementById(idd+tempvalue).style.backgroundColor = "black";	
		}
	}
}
function timer(){
	if(count < 10){
		var timerfn1 = setTimeout(single,10);
	}
	if(count1 < 6){
		var timerfn = setTimeout(dual,10);
	}
	if(count1 == 5 && count == 0){
		clearTimeout(timerfn);
		clearTimeout(timerfn1);
		if(count2 < 10 && count3 < 6){
			count2++;
			begin();
			minbegin();
		}
		else{
			count2 = 0;
			count3 = 0;
			
		}
	}
}
