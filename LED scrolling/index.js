function Letter(theChar){
        switch(theChar){
            case 'A' :
            theLed = [[false, false, true, true, true, true, true], 
                        [false, true, false, false, true, false, false], 
                        [true, false, false, false, true, false, false],
                        [false, true, false, false, true, false, false],
                        [false, false, true, true, true, true, true]];
            break;
            case 'B' :
            theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [false, true, true, false, true, true, false]];
            break;
                case 'C' :
            theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [false, true, false, false, false, true, false]]; 
            break;
            case 'D' :
            theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [false, true, true, true, true, true, false]]; 
            break;
            case 'E' :
            theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, false, false, false, true]];
            break;
            case 'F' :
            theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, false, false, false, false]];
            break;
            case 'G' :
            theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, true, false, true],
                        [true, true, false, false, true, true, true]];
            break;
            case 'H' :
            theLed = [[true, true, true, true, true, true, true], 
                        [false, false, false, true, false, false, false],
                        [false, false, false, true, false, false, false],
                        [false, false, false, true, false, false, false],
                        [true, true, true, true, true, true, true]];
            break;
            case 'I' :
            theLed = [[false, false, false, false, false, false, false], 
                        [true, false, false, false, false, false, true],
                        [true, true, true, true, true, true, true],
                        [true, false, false, false, false, false, true],
                        [false, false, false, false, false, false, false]];
            break;
            case 'J' :
            theLed = [[false, false, false, false, false, true, false], 
                        [false, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, true, true, true, true, true, false],
                        [true, false, false, false, false, false, false]];
            break;  
            case 'K' :
            theLed = [[true, true, true, true, true, true, true], 
                        [false, false, false, true, false, false, false],
                        [false, false, true, false, true, false, false],
                        [false, true, false, false, false, true, false],
                        [true, false, false, false, false, false, true]];
            break;
            case 'L' :
            theLed = [[true, true, true, true, true, true, true], 
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true]];
            break;
            case 'M' :
            theLed = [[true, true, true, true, true, true, true], 
                        [false, true, false, false, false, false, false],
                        [false, false, true, false, false, false, false],
                        [false, true, false, false, false, false, false],
                        [true, true, true, true, true, true, true]];
            break;
            case 'N' :
            theLed = [[true, true, true, true, true, true, true], 
                        [false, false, true, false, false, false, false],
                        [false, false, false, true, false, false, false],
                        [false, false, false, false, true, false, false],
                        [true, true, true, true, true, true, true]];
            break;
            case 'O' :
            theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, false, false, true],
                        [false, true, true, true, true, true, false]];
            break;
            case 'P' :
            theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [false, true, true, false, false, false, false]];
            break;
            case 'Q' :
            theLed = [[false, true, true, true, true, true, false], 
                        [true, false, false, false, false, false, true],
                        [true, false, false, false, true, false, true],
                        [true, false, false, false, false, true, false],
                        [false, true, true, true, true, false, true]];
            break;
            case 'R' :
            theLed = [[true, true, true, true, true, true, true], 
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [true, false, false, true, false, false, false],
                        [false, true, true, false, true, true, true]];
            break;
            case 'S' :
            theLed = [[false, true, true, false, false, false, true], 
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, false, false, true, true, false]];
            break;
            case 'T' :
            theLed = [[true, false, false, false, false, false, false], 
                        [true, false, false, false, false, false, false],
                        [true, true, true, true, true, true, true],
                        [true, false, false, false, false, false, false],
                        [true, false, false, false, false, false, false]];
            break;
            case 'U' :
            theLed = [[true, true, true, true, true, true, false], 
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, false, true],
                        [true, true, true, true, true, true, false]];
            break;
            case 'V' :
            theLed = [[true, true, true, true, true, false, false], 
                        [false, false, false, false, false, true, false],
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, false, true, false],
                        [true, true, true, true, true, false, false]];
            break;
            case 'W' :
            theLed = [[true, true, true, true, true, true, false], 
                        [false, false, false, false, false, false, true],
                        [false, false, false, false, true, true, false],
                        [false, false, false, false, false, false, true],
                        [true, true, true, true, true, true, false]];
            break;
            case 'X' :
            theLed = [[true, false, false, false, false, false, true], 
                        [false, true, true, false, true, true, false],
                        [false, false, false, true, false, false, false],
                        [false, true, true, false, true, true, false],
                        [true, false, false, false, false, false, true]];
            break;
            case 'Y' :
            theLed = [[true, false, false, false, false, false, false], 
                        [false, true, false, false, false, false, false],
                        [false, false, true, true, true, true, true],
                        [false, true, false, false, false, false, false],
                        [true, false, false, false, false, false, false]];
            break;
            case 'Z' :
            theLed = [[true, false, false, false, false, true, true], 
                        [true, false, false, false, true, false, true],
                        [true, false, false, true, false, false, true],
                        [true, false, true, false, false, false, true],
                        [true, true, false, false, false, false, true]];
            break;
            default:
            theLed = [[false, false, false, false, false, false, false]];
        }  
        return theLed;
}
function id(idd){
    return document.getElementById(idd);
}
var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','U','V','W','X','Y','Z'];
function init(){
    var j = 1;
    var k = 1;
    for(var i = 1; i < 176; i++){
        var div = document.createElement("div");
        div.setAttribute('class','ledDiv');
        div.setAttribute('id','ledDiv'+j+""+k);
        id("display").appendChild(div);
        k++;
        // if(i == 25|i == 50|i == 75|i == 100|i == 125|i == 150|i == 175){
            if(i%25 == 0){
            j++;
            k = 1;
        }
    }
    // generate();
}
var list = [];
function generate(){
    var c = "AB";
    for(var i = 0; i < c.length; i++){
        Letter(c.charAt(i));
        for(var j = 0; j < theLed.length; j++){
            list.push(theLed);
        }
    }
    console.log(list);
    show();
}
var k = 25;
var l = 0 ;
var i = 4;
var j = 0;
function show(){
    for(j = 6; j >= 0; j--){
        var temp = j + 1;
        if(list[l][i][j]){
            id("ledDiv"+temp+""+k).style.backgroundColor = "white";
        }
    }
    i--;
    if(i == -1){
        i = 4;
        init();
        l++;
        if(l == list.length){
            l = 0 ;
        }
    }
    console.log(l);
    k--;
    if(k == 0){
        k = 25;
    }
    var time = setTimeout(show,100);
}
function del(){
    id("ledDiv"+temp+""+k).style.backgroundColor = "black";
}

