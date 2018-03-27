function id(idd){
	return document.getElementById(idd);
}
var contacts = ["santhosh,7708362349,1","Surya,9003251371,1"];
var split = [];
var booleanvalue = true;
show();
function sidebar(){
	var value = id('sidebar').classList.toggle("clstoggle");
	if(value){
		id('main').style.width = "100%";
		id('sidebar').style.width = "0%";
	}
	else{
		id('main').style.width = "84.5%";
		id('sidebar').style.width = "15%";
	}
}
function show(){
	id('Fav').style.background = "transparent";
	clearDiv();
	var cl = contacts.length;
	if(booleanvalue){
		id('contacts').style.background = "rgb(242, 242, 242)";
		id('contacts').innerHTML = "<i class='material-icons' style='margin-right:3vh;font-size:22px;'>contacts</i>Contacts("+cl+")";
		for(var i = 0; i < cl; i++){
			split = contacts[i].split(',');
			id('name').innerHTML += "<div style = 'cursor:pointer;' class = 'contacts' onclick = 'edit(event)' >"+split[0]+"</div>";
			id('number').innerHTML += "<div style = 'cursor:pointer;' class = 'contacts' onclick = 'edit(event)' >"+split[1]+"</div>";
		}
		booleanvalue = false;
	}
}
function New(){
	id("check").checked = false;
	var value1 = id('Prompt').classList.toggle("prmpttoogle");
	if(value1){
		id('Prompt').style.display = "block";
	}
	else
		id('Prompt').style.display = "none";
}
function getcontact(){
	var merge = id('newname').value;
	merge += ",";
	merge += id('newnumber').value;
	merge += ",";
	if(id('check').value){
		merge += 1;
	}
	else
		merge += 0;
	contacts.push(merge);
	booleanvalue = true;
	show();
	New();
	id('newname').value = "";
	id('newnumber').value = "";
}
function clearDiv(){
	id('name').innerHTML = "";
	id('number').innerHTML = "";
	booleanvalue = true;
}
function search(){
	clearDiv();
	cl = contacts.length;
	var input = id('search').value;
	if(input == ''){
		show();
	}
	for(var i = 0; i < cl; i++){
		split = contacts[i].split(",");
		var index = '';
		for(var j = 0; j < input.length; j++){
			index += split[0].charAt(j);
			if(input == index){
				console.log(split[0]);
				id('name').innerHTML += "<div style = 'cursor:pointer;' class = 'contacts' onclick = 'edit(event)'>"+split[0]+"</div>";
				id('number').innerHTML += "<div style = 'cursor:pointer;' class = 'contacts' onclick = 'edit(event)'>"+split[1]+"</div>";
			}
		}
	}
}
//var Favcontacts = ["santhosh,7708362349"];
var count = 0;
function Favshow(){
	count = 0;
	id('contacts').style.background = "transparent";
	clearDiv();
	var cl = contacts.length;
	if(booleanvalue){
		id('Fav').style.background = "rgb(242, 242, 242)";
		//id('Fav').innerHTML = "<i class='material-icons' style='margin-right:3vh;font-size:22px;'>people</i>Favorites("++")";
		for(var i = 0; i < cl; i++){
			split = contacts[i].split(',');
			if(split[2] == 1){
				count++;
				id('Fav').innerHTML = "<i class='material-icons' style='margin-right:3vh;font-size:22px;'>people</i>Favorites("+count+")";
				id('name').innerHTML += "<div style = 'cursor:pointer;' class = 'contacts' onclick = 'edit(event)' >"+split[0]+"</div>";
				id('number').innerHTML += "<div style = 'cursor:pointer;' class = 'contacts' onclick = 'edit(event)' >"+split[1]+"</div>";
			}
		}
		booleanvalue = false;
	}
}
function edit(event){
	console.log("event called");
	x = event.clientX;
	y = event.clientY;
	control = false;
	inside();
}
var control,x,y;
function inside(){
	id("smalldiv").innerHTML = "<div id = 'insidediv' style = 'display:block;position:absolute;top:"+y+"px;left:"+x+"px;text-align:center;background:white;border:1px solid blue;width:100px;height:100px;' ><h3 class = 'h3tag' >View</h3><h3 class = 'h3tag' >Edit</h3><h3 class = 'h3tag' >Delete</h3><div>";
	if(!control){
		control = true;
		console.log(control);
		id('insidediv').style.display = "none";
	}
}
