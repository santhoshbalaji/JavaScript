
var quiz = ["What is the full form of 'AI'?,A.  Aeronautical Information,B. Accurate Information,C. Artifical Intelligence,D. All Indian,C. Artifical Intelligence",
            "What is the full form of 'AIIMS'?,A.   All Indian Institute for Medical Science,B. American Institute for Innovation and Material Science,C.   All India Institute of Medical Science, D.  Asian Institute for Information and Medical Science,C.   All India Institute of Medical Science",
            "What is the full form of 'ATM'?,A. Air to Missle,B.  Automated Teller Machine,C.    All Through Market,D.   Ascii Transmission Method,B.  Automated Teller Machine",
            "What is the full form of 'BBC',A.  Board of British Corporation,B.  Business on Bulk Credit,C.  British Business Corporation,D.  British Broadcasting Corporation,D.  British Broadcasting Corporation",
            "What is the full form of 'BEL'?,A. Bharat Electronics Limited,B.  Bureau of Energy Limited,C.  Bank Equity Leasing,D.  Business on Energy Linked,A. Bharat Electronics Limited",
            "What is the full form of 'BIOS'?,A.  Basic Input Output System,B.  Bureau of Information Science,C.  Business Investment on Shares,D.  Braodcasting and Information Organisation,A.  Basic Input Output System",
            "What is the full form of 'CDMA'","	A.	Common Dision Multiple Account","	B.	Code Divided Multiplier Access","	C.	Code Distributed Multiple Access","	D.	Code Division Multiple Access","	D.	Code Division Multiple Access"];
var ques = new Array();
var temp = 0;
var timeout,validcount;
var quescount;
function enter(kc){
  id('audience').style.display = "none";
    var keyCode = kc.which || kc.keycode;
    if(keyCode == 13){
        play();
    }
}
function play(){
    reset();
    validcount = true;
    id("colorbox").style.display = "block";
    id("fifty").style.border = "1px solid rgba("+r+","+g+","+b+",0.8)";
    id("fifty").innerHTML = "50/50";
    id("audience").innerHTML = "Audience Poll";
    document.getElementsByTagName('h1')[0].innerHTML = "";
    document.getElementsByTagName('h1')[1].innerHTML = "";
    var heading = ["A","B","B","R","E","V","I","A","T","I","O","N"];
       for(var i = 0; i < heading.length; i++ )
        {
            var r = parseInt(Math.round(Math.random() * 255));
            var g = parseInt(Math.round(Math.random() * 255));
            var b = parseInt(Math.round(Math.random() * 255));
            document.getElementsByTagName('h1')[0].innerHTML += "<span id = 'span"+i+"'>"+heading[i]+"</span>";
            id('span'+i).style.color += "rgb("+r+","+g+","+b+")";
        }
    var r = parseInt(Math.round(Math.random() * 255));
    var g = parseInt(Math.round(Math.random() * 255));
    var b = parseInt(Math.round(Math.random() * 255));
    document.body.style.backgroundColor = "rgba("+r+","+g+","+b+",0.3)";
    id("fifty").style.border = "2px solid rgba("+r+","+g+","+b+",1)";
    id("audience").style.border = "2px solid rgba("+r+","+g+","+b+",1)";
    id('playBT').style.display = "none";
    //document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/UD7CEz6/question-mark-animation-quiz-background_7kowc6tv__F0000.png')";
    id('playBT').style.display = "hidden";
    id("opt").innerHTML = "";
    ques = quiz[temp].split(",");
    id("ques").innerHTML = ques[0];
    temp++;
    for(var i = 1; i < 5; i++){
        // id("opt").innerHTML += "<label class = 'label' for = 'idno"+i+"'>"+ques[i]+"</label>";
        id("opt").innerHTML += "<div class = 'id' id = 'divid"+i+"' ><label class = 'label' for = 'idno"+i+"'>"+ques[i]+"</label>  <input onchange = 'check()' type = 'radio' name = 'option'  id = 'idno"+i+"' value = '"+ques[i]+"' /></div>";
        //id("idno"+i).checked = false;
    }
    if(temp == quiz.length){
        temp = 0;
    }


}
var count = 0;
function check(){
    for(var i = 1; i < 5; i++){
        for(var j = 1; j < 5; j++){
            if(id("idno"+i).checked == true){
                if(i != j){
                    id("idno"+j).checked = false;
                }
            }
            if(id("idno"+i).checked == true){
                if(id("idno"+i).value == ques[5]){
                    timeout = setTimeout(play,3000);
                    document.body.style.backgroundColor = "rgb(0, 179, 0)";
                    id("colorbox").style.display = "none";
                    if(validcount == true){
                        count++;
                        validcount = false;
                    }
                    id("result").innerHTML = "SCORE = "+count;
                }
                else{
                    document.body.style.backgroundColor = "rgba(255, 71, 26,0.2)";
                     setTimeout(reset,1000);
                    id("colorbox").style.display = "none";
                    id("result").innerHTML = "SCORE = "+count;
                     timeout = setTimeout(play,3000);
                }
            }
        }

    }
}
function reset(){
    id("colorbox").style.backgroundColor = "transparent";
}
function id(idd){
    return document.getElementById(idd);
}
function fifty(){
    for(var i = 1; i < 5; i++){
        id("divid"+i).style.visibility = "hidden";
        if(id("idno"+i).value == ques[5]){
            id("divid"+i).style.visibility = "visible";
            i++;
            id("divid"+i).style.visibility = "visible";
        }
    }
    id("fifty").style.display = "none";
}
// function audience(){
//     id("tempdiv").innerHTML = "<div id = 'temp'>Hello</div>";
//     for(var i = 1; i < 5; i++){
//         id("temp").innerHTML = "<div class = 'audiencediv' id = 'temp"+i+"'></div>";
//     }
//     for(var i = 1; i < 5; i++){
//         if(id("idno"+i).value == ques[5]){
//             id("temp"+i).style.width = i+50+"px";
//             id("temp"+i).innerHTML = i+"50";
//         }
//         id("temp"+i).style.width = i+10+"px";
//         id("temp"+i).innerHTML = i+"10";
//     }
// }
