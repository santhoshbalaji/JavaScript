function id(idd){
    return document.getElementById(idd);
}
var monthL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var daysL = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var daysS = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
var date = new Date();
var pat1 = "[0-9]{4}[-][A-Za-z]{3}";
var pat2 = "[0-9]{4}";
var pat3 = "[0-9]{4}[-][0-9]{4}";
var TempDate = new Date();
function defaultPage(){
    var month = date.getMonth();
    monthDis(month);
}
function clear(){
    id("displayBar").innerText = "";
    // id('con').innerText = "";
    id("weekDays").innerHTML = "";
    id('dayDiv').innerHTML = "";
}
function monthDis(a){
    date.setMonth(a);
    check(1);
    // console.log(date.getMonth() + " - " +TempDate.getMonth());
    var day = new Date(date.getFullYear(),a -1, 0).getDate();
    var firstDay = new Date(date.getFullYear(), a, 1).getDay();
    var lastDay = new Date(date.getFullYear(), a + 1, 0).getDate();
    clear();
    for(var i = 0; i < daysL.length; i++){
        var div = document.createElement("div");
        div.setAttribute('class','weekDiv');
        div.innerText = daysS[i];
        var weekDays = id("weekDays");
        weekDays.appendChild(div);
    }
    var count = 1;
    for(var i = 0; i < 42; i++){
        var div = document.createElement("div");
        div.setAttribute('class','weekDays');
        div.setAttribute('data-val',i);
        if(i >= firstDay && count <= lastDay){
            div.innerText = count;
            // date.setDate(count);
            div.setAttribute("class","weekDays weekHover");
            div.setAttribute("onclick","check("+count+")");
            if((TempDate.getDate() == count) && (TempDate.toString() == date.toString()) ){
                div.setAttribute("class","weekDays  colorChange");
            }
            count++;
        }
        var weekDays = id('dayDiv');
        weekDays.appendChild(div);
    }
    id("displayBar").innerText = date.getFullYear()+"-"+monthS[a];
    // id('con').innerText = day + ' - ' + a + ' - ' + firstDay + ' - ' + lastDay ;
}
function check(a){
    var newdate = new Date(""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+a+"");
    // console.log(""+date.getFullYear()+"-"+date.getMonth()+"-"+a+"");
    id('sideDiv').innerHTML = "<p>"+newdate.getFullYear()+" </p><p>"+monthL[newdate.getMonth()]+" </p><p> "+daysL[newdate.getDay()]+" </p><p>"+newdate.getDate()+"</p>";
}
function previous(){
    var patt1 = new RegExp(pat1);
    var patt2 = new RegExp(pat2);
    var patt3 = new RegExp(pat3);
    var show = id("displayBar").innerText;
    if(patt1.test(show)){
        date.setMonth(date.getMonth() - 1);
        monthDis(date.getMonth());
    }
    else if(patt3.test(show)){
        generateMinus(aa);
    }
    else if(patt2.test(show)){
        // console.log(show);
        date.setFullYear(date.getFullYear() - 1);
        id("displayBar").innerText = date.getFullYear();
        disMonth(date.getFullYear());
    }
    
}
function next(){
    var patt1 = new RegExp(pat1);
    var patt2 = new RegExp(pat2);
    var patt3 = new RegExp(pat3);
    var show = id("displayBar").innerText;
    if(patt1.test(show)){
        date.setMonth(date.getMonth() + 1);
        monthDis(date.getMonth());
    }
    else if(patt3.test(show)){
        // console.log(bb);
        generatePlus(bb);
    }
    else if(patt2.test(show)){
        // console.log(show);
        date.setFullYear(date.getFullYear() + 1);
        id("displayBar").innerText = date.getFullYear();
        disMonth(date.getFullYear());
    }
}
function disMonth(a){
    clear();
    date.setFullYear(a);
    id("displayBar").innerText = a;
    // console.log(date.getFullYear() + " - " +TempDate.getFullYear());
    date.setMonth(TempDate.getMonth());
    for(var i = 0 ; i < 12; i++){
        var div = document.createElement("div");
        div.setAttribute('class','monthDis');
        div.setAttribute('data-val',i);
        div.setAttribute('onclick',"monthDis("+i+")");
        div.innerText = monthL[i];
        if((TempDate.getMonth() == i) && (TempDate.toString() == date.toString()) ){
            div.setAttribute("class","monthDis colorChange");
        }
        var weekDays = id('dayDiv');
        weekDays.appendChild(div);
    }
}
var aa,bb;
function generateMinus(y){
    var a = y - 12;
    var b = y - 1 ;
    disYear(a,b);
    aa = a;
    bb = b;
}
function generatePlus(y){
    var a = y + 1;
    var b = y + 12;
    disYear(a,b);
    aa = a;
    bb = b;
}
function generate(y){
    if(y%5 == 0){
        var a = y - 6;
        var b = y + 5;
    }
    else{
        while(y%5 != 0){
            y = y-1;
        }
        var a = y - 6;
        var b = y + 5;
    }
    disYear(a,b);
    aa = a;
    bb = b;
}
function disYear(a,b){
    clear();
    id("displayBar").innerText = a+ "-" + b;
    for(var i = a;i <=  b; i++){
        var div = document.createElement("div");
        div.setAttribute('class','monthDis');
        div.setAttribute('data-val',i);
        div.setAttribute('onclick',"disMonth("+i+")");
        div.innerText = i;
        // console.log( TempDate.getFullYear()+" - "+ i);
        if((TempDate.getFullYear() == i) && (TempDate.toString() == date.toString()) ){
            div.setAttribute("class","monthDis colorChange");
        }
        var weekDays = id('dayDiv');
        weekDays.appendChild(div);
    }
}
function shift(){
    var pat1 = "[0-9]{4}[-][A-Za-z]{3}";
    var patt1 = new RegExp(pat1);
    var patt2 = new RegExp(pat2);
    var show = id("displayBar").innerText;
    if(patt1.test(show)){
        disMonth(date.getFullYear());
    }
    else if(patt2.test(show)){
        generate(date.getFullYear());
    }
}