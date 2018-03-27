var a=1;
var num={"all":[]};
  function ch(val) {

    document.getElementById('a'+val).classList.toggle("over");
    document.getElementById('a'+val).classList.toggle("borderch");        // changing settings for selected one..


        document.getElementById('a'+a).classList.toggle("over");            //previous one 
        document.getElementById('a'+a).classList.toggle("borderch");

        a = val;
      if(val == 1){ //to list
          document.getElementById('show').style.display="block";
          document.getElementById('incomp').style.display="none";
          document.getElementById('comp').style.display="none";
      }
      else if (val ==2) {
        document.getElementById('incomp').style.display="block";
        document.getElementById('comp').style.display="none";
        document.getElementById('show').style.display="none";
      }
      else {
        document.getElementById('comp').style.display="block";
        document.getElementById('incomp').style.display="none";
        document.getElementById('show').style.display="none";
      }
    }
    var no=-1
    function store(s) {
      if(s.keyCode==13){
        var txt={"name":insertNote.value,
                        "Key":false
                      };
        num.all.push(txt);
        no++;
        show();
      }
      list();
    }
                //to create div
    var ind = 0;
    function show(){
      document.getElementById('show').innerHTML="";
      if(num.all.length != 0){
      for(var i=0 ;i<num.all.length;i++){
        if(num.all[i].Key == false){
          document.getElementById('show').innerHTML+="<div class='b1'><div class='check'onclick='checks("+i+")'></div><div class='names'>"+num.all[i].name+"</div><span onclick='del("+i+")' class='glyphicon glyphicon-trash'></span></div>";      
        }
        else{
          document.getElementById('show').innerHTML+="<div class='b1'><div class='check bg'onclick='checks("+i+")'>&#x2713;</div><div class='names striker'>"+num.all[i].name+"</div><span onclick='del("+i+")' class='glyphicon glyphicon-trash'></span></div>"; 
        }
       }
      }
      document.getElementById('insertNote').value="";
      ind++;
    }
            // for check box
    function checks(val) {
      if(document.getElementsByClassName('check')[val].innerText == ""){
      document.getElementsByClassName('check')[val].innerHTML="&#x2713;";
      document.getElementsByClassName('check')[val].classList.toggle("bg");
      document.getElementsByClassName('names')[val].classList.toggle("striker");
      num.all[val].Key = true;
      }
      else{
        document.getElementsByClassName('check')[val].innerHTML="";
        document.getElementsByClassName('check')[val].classList.toggle("bg");
        document.getElementsByClassName('names')[val].classList.toggle("striker");
        num.all[val].Key = false;
      }
        list();
      }
          // to show incom & comp list
      function list() {
        document.getElementById('incomp').innerHTML="";
        document.getElementById('comp').innerHTML="";

        for(var i = 0;i<num.all.length ;i++){
          if(document.getElementsByClassName('check')[i].innerText == ""){// incomp
            document.getElementById('incomp').innerHTML+="<div class='b1'><div class='check'onclick='checks("+i+")'></div><div class='names'>"+num.all[i].name+"</div><span onclick='del("+i+")' class='glyphicon glyphicon-trash'></span></div>";
          }
          else{ //comp
            document.getElementById('comp').innerHTML+="<div class='b1'><div class='check bg'onclick='checks("+i+")'>&#x2713;</div><div class='names striker'>"+num.all[i].name+"</div><span onclick='del("+i+")' class='glyphicon glyphicon-trash'></span></div>";
          }
          }
      }
          // to delete
    function del(val) {
      num.all.splice(val,1);
      show();
      list();
    }
