function ClickLoad(){
	var MyDiv1 = document.getElementById('MyDiv');
	var Table = document.createElement('table');
	Table.setAttribute("id","MyTable");
	for (var i = 0; i < webColors.colors.length; i++) {
		var Tr = document.createElement("tr");
		var Td1 = document.createElement("td");
		Td1.innerText= webColors.colors[i].color;
		var Td2 = document.createElement("td");
		Td2.innerText = webColors.colors[i].hex;
		Tr.appendChild(Td1);
		Tr.appendChild(Td2);
		Tr.setAttribute("style","background:"+webColors.colors[i].color);
		Tr.onclick = SetBg;
		Table.appendChild(Tr);
	}	
	MyDiv1.appendChild(Table);
}
var time = setInterval(AutoBg,1000);
function SetBg(){
	console.log(this.parentNode);
	document.body.style.transition = "2s";
	document.body.style.background = this.lastChild.innerText;	
}
var i = 0;
var MarginT = 0;
function AutoBg(){
	// for (vari = 0; i < webColors.colors.length; i++){
		if(i != 0)
			document.getElementsByTagName('tr')[i-1].style.transform = "scale(1,1)";
		console.log(i);
		document.body.style.transition = "2s";
		document.body.style.background = webColors.colors[i].color;
		if(document.getElementsByTagName('tr')[i].firstChild.innerText == webColors.colors[i].color){
			document.getElementsByTagName('tr')[i].style.transition = "1s";
			document.getElementsByTagName('tr')[i].style.transform = "scale(1.1,1.5)";
		}
		// console.log(document.getElementsByTagName('tr')[i].firstChild.innerText);
		if(i > 12 && i < 140){
			// document.getElementById('MyDiv').style.transform ="translateY("+-(MarginT)+"px)"; //+"px";
			// MarginT -= 13;
			window.scrollTo(300, MarginT);
			// console.log(300, MarginT);
			MarginT += 30;
		}
			// window.scrollTo(300, 500);
		i++;
		if(i == 139){
			document.getElementsByTagName('tr')[i].style.transform = "scale(1,1)";
			i = 0;
			clearInterval(time);
		}
	// }
}
