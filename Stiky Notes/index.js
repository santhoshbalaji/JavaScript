function id(idd){
    return document.getElementById(idd);
}
var ind = 0;
var divId = 1;
function Notes(){
    var colorAry = ["LightSkyBlue","PaleGreen","LemonChiffon","LightPink","Violet"];
    var top = Math.round(Math.random() * 50 );
    var left = Math.round(Math.random() * 50 );
    var div = document.createElement('div');
    div.style.top = top+"%";
    div.style.left = left+"%";
    div.setAttribute('class','notesDiv');
    // div.setAttribute('contenteditable','true');
    div.setAttribute('id',"'A"+divId+"'");
    div.setAttribute('draggable','true');
    div.setAttribute('ondragstart','drag(event)');
    div.setAttribute('ondragover','allowDrop(event)');
    div.style.backgroundColor = colorAry[ind];
    ind++;
    if(ind == colorAry.length){
        ind = 0;
    }
    divId++;
    if(divId == 51){
        divId = 1;
    }
    id('whole').appendChild(div);
}
function allowDrop(ev) {
    ev.preventDefault();
    // console.log(ev);
}

function drag(ev) {
    var td = ev.dataTransfer.setData("text", ev.target.id);
    console.log(td);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    console.log(div);
    var div = id(data);
    var top = ev.clientX;
    var left = ev.clientY;
    console.log(div);
    console.log(top+"\t"+left);
    div.style.clientX = top+"px";
    div.style.clientY = left+"px";
    ev.preventDefault();
}