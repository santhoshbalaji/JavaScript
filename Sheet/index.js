function id(idd){
    return document.getElementById(idd);
}
function init(){
    for(var i = 1;i <= 50; i++ ){
        var tr = document.createElement('tr');
        for(var j = 65; j <= 90; j++){
            var td = document.createElement('td');
            var v = String.fromCharCode(j);
            td.setAttribute('id',''+v+''+i);
            td.setAttribute('contenteditable','true');
            console.log(String.fromCharCode(j));
            tr.appendChild(td);
        }
        id("tbl").appendChild(tr);
    }
}