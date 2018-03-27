function id(idd){
	return document.getElementById(idd);
}
var n = 0;
var Atag,Atag1,Itag;
function LoadFn(){
	var Btn = document.createElement('button');
	Btn.setAttribute("id","Next");
	Btn.innerText = "New Quotes";
	Btn.onclick = Nxt;
	id('Quotes').appendChild(Btn);
	Atag = document.createElement('a');
	Itag = document.createElement('img');
	Atag1 = document.createElement('a');
	AtagChange();
	Color();
}
function Nxt(){
	n++;
	AtagChange();
	if(n == QUOTES.data.length - 1){
		n = 0;
	}
	Color();
}
function Color(){
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	document.body.style.transition = "2s";
	document.body.style.background = "rgb("+r+","+g+","+b+")";
	id('Quotes').style.color = "rgb("+r+","+g+","+b+")";
	id('Next').style.background = "rgb("+r+","+g+","+b+")";
	// id('Icon').style.background = "rgb("+r+","+g+","+b+")";
}
function AtagChange(){
	id('Display').innerHTML = QUOTES.data[n].quotes;
	Atag.setAttribute("href","https://en.wikipedia.org/wiki/"+QUOTES.data[n].name);
	Atag.setAttribute('target','blank');
	Atag.innerText = QUOTES.data[n].name;
	id('Name').appendChild(Atag);
	Atag1.setAttribute("href","https://en.wikipedia.org/wiki/"+QUOTES.data[n].name);
	Itag.setAttribute("src","http://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1024px-Wikipedia-logo-v2.svg.png");
	Itag.setAttribute('target','blank');
	Atag1.appendChild(Itag);
	id('Icon').appendChild(Atag1);
}