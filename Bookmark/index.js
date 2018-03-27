function id(idd){
    return document.getElementById(idd);
}
var Bookmarks = {
    "All" : ["W3Schools,http://www.w3schools.com,Development","Cssreference,http://cssreference.io,Design","Google Play,http://play.google.com,Mobileapps"],
    "Development" : ["W3Schools,http://www.w3schools.com"],
    "Design" : ["Cssreference,http://cssreference.io"],
    "Mobileapps" : ["Google Play,http://play.google.com"]
}
var jsonKeys;
function getKey(){
    jsonKeys = Object.keys(Bookmarks);
}
function DisplayCategories(a,b){
    getKey();
    id(a).innerHTML = "";
    for(var i = 0; i < jsonKeys.length;i++){
        var P = document.createElement(b);
        P.innerText = jsonKeys[i];
        if(a == "CatDetails"){
            P.onclick = UrlDisplay;
        }
        if(a == "CatList"){
            P.value = jsonKeys[i];
            P.setAttribute('id',jsonKeys[i]);
        }
        id(a).appendChild(P);
    }
}
var A;
function animateout(){
    id(A).classList.toggle('Ani');     
}
function animate(a){
    A = a;
    var i = id(a).classList.toggle('Ani');
    setTimeout(animateout,1000);
}
function UrlDisplay(){
    id("BottomRight").innerText = "";
    var Text = this.innerText;
    var UrlNo = Bookmarks[Text].length;
    for(var i = 0; i < UrlNo; i++){
        var NN = Bookmarks[Text][i];
        var NU = Bookmarks[Text][i].split(",");
        var div = document.createElement('div');
        div.setAttribute('class','Urldiv');
        div.setAttribute('draggable','true');
        div.setAttribute('ondragstart','drag(event)');
        for(var j = 0; j < NU.length; j++){
            if(j == 1){
                var p = document.createElement('a');
                p.target = 'blank';
                p.href = NU[j];
            }
            else{
                var p = document.createElement('h4');
            }
            p.innerText = NU[j];
            div.appendChild(p);
        }
        // console.log(typeof(Bookmarks[Text][i]));
       div.innerHTML += "<i class='material-icons' onclick = 'edit(\""+Text+"\",\""+NN+"\","+i+")' >mode_edit</i>";
       div.innerHTML += "<i class='material-icons' onclick = 'deletefn(\""+Text+"\",\""+NN+"\","+i+",this)' >delete_forever</i>";
        id("BottomRight").appendChild(div);
    }
    animate("BottomRight");
}
function Addcategory(c,e){
    var b = id(e).classList.toggle('catip');
    if(b){
        id(c).style.animation = 'Addpagein 1s 1 running forwards';
    }
    else{
        id(c).style.animation = 'Addpageout 1s 1 running forwards';
    }
}
function check(){
    id('BottomRight').innerHTML = '';
    var input = id('searchBox').value;
	for(var i = 0; i < Bookmarks.All.length; i++){
        var array = Bookmarks.All[i].split(',');
		var arraysplit = '';
		for(var j = 0; j < input.length; j++){
			arraysplit += array[0].charAt(j);
			if(input == arraysplit){
				id('BottomRight').innerHTML += "<div class = 'Urldiv'>"+Bookmarks.All[i]+"</div>";
			}
		}
	}
}
function out(){
    id('searchBox').value = '';
}
function Addcate(k){
    if(k.key == 'Enter'){
        var add = id('addcategory').value;
        Bookmarks[add] = [];
        DisplayCategories('CatDetails','p');
        Addcategory('addcategory','addcategory');
    }
}
function AddUrl(a,e){
    id('U').value = '';
    id('Uu').value = "";
    id('CatList').value = '' ;
    id('f').innerText = 'New Bookmark';
    id('f').setAttribute('onclick','New()') ;
    DisplayCategories('CatList','option');
    Addcategory(a,e);
}
function New(){
    var Name = id('U').value;
    var Url = id('Uu').value;
    var Opt = id('CatList').value;
    if(Name != ''  && Url != '' && Opt != ''){
        Bookmarks.All.push(Name+","+Url+","+Opt);
        Bookmarks[Opt].push(Name+","+Url);
        AddUrl('Form','FormDiv');
    }    
    else{
        alert("Input boxes are empty");
        AddUrl('Form','FormDiv');
    }        
}
function Gridview(){
    var value = id("BottomRight").classList.toggle('BottomRight');    
    if(value)
        id('Grid').innerHTML = "<i class='material-icons'>list</i>";
    else    
        id('Grid').innerHTML = "<i class='material-icons'>grid_on</i>";
}
function Setting(){
    // id('Settings_Div').classList.toggle('Setting');
    id('Color').classList.toggle('Settings_Color');
    id('Font').classList.toggle('Settings_Font');
    id('Theme').classList.toggle('Settings_Theme');
}
function Settingout(){
    Setting();
}
function colorGenerate(){
    for(var i = 0; i < 28; i++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var div = document.createElement('div');
        div.setAttribute('class','ColorDiv');
        div.style = 'background-color:rgb('+r+','+g+','+b+')';
        div.setAttribute('co','rgb('+r+','+g+','+b+')');
        div.setAttribute('onclick','changeColor(this)');
        id('ColorDiv').appendChild(div);   
    }
}
function Change(e){
    Addcategory(e,'colorHideDiv');
}
function changeColor(e){
    var color = e.style.backgroundColor;
    var c = document.querySelectorAll('.Urldiv');
    for(var i = 0; i < c.length; i++){
        c[i].style.backgroundColor = color;
    }
}

function edit(a,e,s){
    A = a;
    AddUrl('Form','FormDiv');
    id('f').innerText = 'Edit';
    id('f').setAttribute('onclick','EDIT('+a+','+e+','+s+')') ;
    var NN = e.split(',');
    if(a == "All"){
        id('U').value = NN[0];
        id('Uu').value = NN[1] ;
        id(NN[2]).selected = 'true' ;
    }
    else{
        id('U').value = NN[0];
        id('Uu').value = NN[1] ;
        id(a).selected = 'true' ;
    }
    
}
function EDIT(a,e,s){
    var Name = id('U').value;
    var Url = id('Uu').value;
    var Opt = id('CatList').value;
    if(Opt == A){
        
    }
}
function deletefn(a,e,s,ele){
    if(a == 'All'){
        var index = Bookmarks.All.indexOf(e);
        Bookmarks[a].splice(index,1);
        var N = e.split(',');
        var concat = N[0] + ',' + N[1];
        var ind = Bookmarks[N[2]].indexOf(concat);
        Bookmarks[N[2]].splice(ind,1);
        ele.parentNode.remove();
    }
    else{
        var index = Bookmarks[a].indexOf(e);
        Bookmarks[a].splice(index,1);
        var concat = e+","+a;
        var ind = Bookmarks.All.indexOf(concat);
        console.log(concat , ind);
        console.log(Bookmarks.All[0]);
        Bookmarks.All.splice(ind,1);
        ele.parentNode.remove();
    }    
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData(".Urldiv");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}