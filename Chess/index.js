var htmlelements = "";
var array = [];
var width = (8 * 100);
function id(idd){
	return document.getElementById(idd);
}
function load(){
	var num = 1;
	var temp = 0;
	for (var i = 0; i < 8; i++){
		for(var j = 0; j < 8; j++){
			array.push(num);
			id('display').innerHTML += "<div id = 'num"+num+"' class = 'div' onclick = 'move(this,"+array[temp]+")' ></div>";
			if(i % 2 == 0){
				if(j % 2 != 0){
					id('num'+num).style.backgroundColor = "black";
				}
			}
			else if(i % 2 != 0){
				if(j % 2 == 0){
					id('num'+num).style.backgroundColor = "black";
				}
			}
			num++;
			temp++;
		}	
	}
	id('display').style.width = width;
}
var tempvalue;
var tempdiv;
function move(currentdiv,arrayvalue){
	console.log(arrayvalue);
	for(var i = 1; i <= 64; i++){
		id('num'+i).innerHTML = "";
	}
	currentdiv.innerHTML = "<img src = 'https://www.puzzlemaster.ca/imagecache/products/alpha/640x640/010/010886.png') />";
	tempdiv = currentdiv;
	tempvalue = arrayvalue;
	var temparrayvalue = arrayvalue;
	vertical(currentdiv,arrayvalue);
	horizontal(currentdiv,arrayvalue);
	cross(currentdiv,arrayvalue);
	currentdiv.innerHTML = "<img src = 'https://www.puzzlemaster.ca/imagecache/products/alpha/640x640/010/010886.png') />";	
}
function horizontal(currentdiv2,arrayvalue2){
	var temparrayvalue = arrayvalue2;
	var num = 1;
	var temp = 0;
	for(var i = 0; i < 8; i++){
		if((tempvalue - 8) > 0){
			tempvalue = tempvalue - 8;
			// var temptemp = tempvalue - i - 1;
			// var temptemp1 = arrayvalue - i - 1;
			// id('num'+temptemp).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
			// id('num'+temptemp1).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
			id('num'+tempvalue).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
		}
		if((temparrayvalue + 8) < 65){
			temparrayvalue = temparrayvalue + 8;
			// temptemp1 = temparrayvalue - i - 1;
			// id('num'+temptemp).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
			// id('num'+temptemp1).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
			id('num'+temparrayvalue).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
		}
	}
}
var temptemp;
function cross(currentdiv3,arrayvalue3){
	var tempvalue1 = arrayvalue3;
	var temparrayvalue1 = arrayvalue3;
	for(var i = 0; i < 8; i++){
		if((tempvalue1 - 7) > 0){
			tempvalue1 = tempvalue1 - 7;
			var temptemp = arrayvalue3;
			temptemp = temptemp - 9;
			id('num'+tempvalue1).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
			id('num'+temptemp).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
		}	
		if((temparrayvalue1 + 7) < 65){
			temparrayvalue1 = temparrayvalue1 + 7;
			//var temp1temp = arrayvalue3 - i - 1;
			//var temp1temp1 = arrayvalue3 - i - 1;
			id('num'+temparrayvalue1).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
			//id('num'+temp1temp1).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
		}
	}
}	
function vertical(currentdiv1,arrayvalue1){
	var temparrayvalue1 = arrayvalue1;
	var rightvalue = temparrayvalue1 % 8;
	var rightvalue1 = arrayvalue1 - rightvalue;
	for (var i = 0; i < 8; i++){
		if(rightvalue != 0){
			rightvalue1++;
		}
		id('num'+rightvalue1).innerHTML = "<img src = 'https://target.scene7.com/is/image/Target/red_bg84112-170313_1489428814121?wid=1110&qlt=80&fmt=png') />";
		if(rightvalue == 0){
			rightvalue1--;
		}
	}
}