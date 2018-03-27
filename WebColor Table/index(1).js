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
var time = setInterval(AutoBg,2000);
function SetBg(){
	console.log(this.parentNode);
	document.body.style.transition = "2s";
	document.body.style.background = this.lastChild.innerText;	
}
var i = 0;
function AutoBg(){
	// for (var i = 0; i < webColors.colors.length; i++){
		if(i != 0)
			document.getElementsByTagName('tr')[i-1].style.transform = "scale(1,1)";

		document.body.style.transition = "2s";
		document.body.style.background = webColors.colors[i].color;
		if(document.getElementsByTagName('tr')[i].firstChild.innerText == webColors.colors[i].color){
			document.getElementsByTagName('tr')[i].style.transition = "1s";
			document.getElementsByTagName('tr')[i].style.transform = "scale(1.5,1.5)";
		}
		// console.log(document.getElementsByTagName('tr')[i].firstChild.innerText);
		
		i++;
		if(i == 140){
			document.getElementsByTagName('tr')[i].style.transform = "scale(1,1)";
			clearInterval(time);
		}
	// }
}