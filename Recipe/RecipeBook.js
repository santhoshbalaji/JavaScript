function id(idd){
	return document.getElementById(idd);
}
var no ;
function init(){
	id('Div').innerHTML = "";
	no = RecipeBook.Recipe.length;
	var Mydiv = document.createElement('div');
	for (var i = 0; i < no; i++) {
		var MydivA = document.createElement('div');
		MydivA.setAttribute('class','Div');
		MydivA.setAttribute('id','Div'+(i+1));
		var Ingrname = document.createElement('h1');
		// Ingrname.onclick = show(this,i+1);
		Ingrname.setAttribute("onclick","show(this,"+(i+i+1)+")");
		Ingrname.innerText = RecipeBook.Recipe[i].name;
		Mydiv.appendChild(Ingrname);
		// MydivA.appendChild(Ingrname);
		

		var IngrType = document.createElement('h3');
		IngrType.innerText = "TYPE";
		var IngrTypeA = document.createElement('h5');
		IngrTypeA.innerText = RecipeBook.Recipe[i].type;
		MydivA.appendChild(IngrType);
		MydivA.appendChild(IngrTypeA);


		var TempIngr = RecipeBook.Recipe[i].Ingredients.split(",");
		var IngrA = document.createElement('h3');
		IngrA.innerText = "INGREDIENTS";
		MydivA.appendChild(IngrA);
		for (var j = 0; j < TempIngr.length; j++) {
			var Ingr = document.createElement('h5');
			Ingr.innerText = TempIngr[j];
			MydivA.appendChild(Ingr); 	
		}

		var editbtn = document.createElement('button');
		editbtn.setAttribute('id','Edit');
		editbtn.innerText = "Edit";
		MydivA.appendChild(editbtn);

		var Delete = document.createElement('button');
		editbtn.setAttribute('id','Delete');
		Delete.innerText = "Delete";
		MydivA.appendChild(Delete);


		Mydiv.appendChild(MydivA);

	
	}
	id('Div').appendChild(Mydiv);
}
var temp = '';
function show(ele,e){
	console.log(ele.parentNode);
	if(temp != e){
		for (var i = 1; i < ele.parentNode.childElementCount; i = i+2) {
			if(ele.parentNode.children[i].classList.toggle('Hide')){
				ele.parentNode.children[i].classList.toggle('Hide')
			}		
		}
	}	
	ele.parentNode.children[e].classList.toggle('Hide');
	temp = e;
}
function display(){
	id("U").value = "";
	id("u").value = "";
	var value = id("FormDiv").classList.toggle('you');
	console.log(value);
	if(value){
		id("Form").style.top = "2%";
	}
	else{
		id("Form").style.top = "-50%";
	}
}
function New(){
	var Name = id('U').value;
	var Type = id('Uu').value;
	var Ingredients = id('u').value; 
	var obj = {
		"name" : Name,
		"type" : Type,
		"Ingredients" : Ingredients
	};
	console.log(obj);
	console.log(RecipeBook.Recipe);
	RecipeBook.Recipe.push(obj);
	display();
	init();
}