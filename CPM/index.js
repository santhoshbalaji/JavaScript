function id(idd){
	return document.getElementById(idd);
}
var Alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function Init(){
	var IpDiv = document.createElement('div');
	IpDiv.setAttribute('id','IpDiv');
	var H1 = document.createElement('h1');
	H1.innerText = "Critical Path Method";
	H1.setAttribute('id','H1');
	var IpH = document.createElement('h2');
	IpH.innerText = "Enter the no of Activities";
	var Ip = document.createElement('input');
	Ip.setAttribute('id','Acvalue');
	Ip.setAttribute('type','text');
	Ip.setAttribute('placeholder','Enter the no of activities');
	Ip.onchange = displayIp;
	IpDiv.appendChild(IpH);
	IpDiv.appendChild(Ip);
	document.body.appendChild(IpDiv);
	document.body.appendChild(H1);
	Temp();
}
var IP;
function displayIp(){
	id('IpDiv').style.top = "-50%";
	id('H1').style.top = "-50%";
	id('TempDiv').style.top = "20%";
	IP = id('Acvalue').value;

	var TempDiv = document.createElement("div");
	TempDiv.setAttribute('id','TempDiv');

	var Act = document.createElement("div");
	Act.setAttribute('id','Act');
	Act.setAttribute('class','TempDiv');

	var PreAct =  document.createElement("div");
	PreAct.setAttribute('id','PreAct');
	PreAct.setAttribute('class','TempDiv');

	var Dur = document.createElement("div");
	Dur.setAttribute('id','Dur');
	Dur.setAttribute('class','TempDiv');

	var SubBtnDiv = document.createElement("div");
	SubBtnDiv.setAttribute('id','SubBtnDiv');
	SubBtnDiv.setAttribute('class','TempDiv');

	var SubBtn = document.createElement('button');
	SubBtn.setAttribute('id','SubBtn');
	SubBtn.setAttribute('class','SubBtn');
	SubBtn.onclick = getValue;
	SubBtn.innerText = "Finish";

	var ReBtn = document.createElement('button');
	ReBtn.setAttribute('id','ReBtn');
	ReBtn.setAttribute('class','SubBtn');
	ReBtn.innerText = "ReEnter";

	SubBtnDiv.appendChild(SubBtn);
	SubBtnDiv.appendChild(ReBtn);

	for(var i = 0; i < IP ; i++){

		var IpA = document.createElement('input');
		IpA.setAttribute('id','Acvalue'+(i+1));
		IpA.setAttribute('class','IP');
		IpA.setAttribute('disabled','');
		IpA.setAttribute('type','text');
		IpA.value = Alphabets[i];
		Act.appendChild(IpA);

		var IpB = document.createElement('input');
		IpB.setAttribute('id','PreAcvalue'+(i+1));
		if(i == 0){
			IpB.setAttribute('disabled','');
			IpB.value = "-";
		}
		IpB.setAttribute('class','IP');
		IpB.setAttribute('type','text');
		IpB.setAttribute('placeholder','enter proceding activities by comma separated');
		PreAct.appendChild(IpB);

		var IpC = document.createElement('input');
		IpC.setAttribute('id','Durvalue'+(i+1));
		IpC.setAttribute('class','IP');
		IpC.setAttribute('type','text');
		IpC.setAttribute('placeholder','enter the duration');
		Dur.appendChild(IpC);
	}
	id('TempDiv').appendChild(Act);
	id('TempDiv').appendChild(PreAct);
	id('TempDiv').appendChild(Dur);
	id('TempDiv').appendChild(SubBtnDiv);

}
var MyJson = {
	"Value" : []
};
/*
var TempMyJson = {
	"Value" : [
		{
			"Activity" : "A",
			"PrecedingActivity" : "-",
			"Duration" : "5"
		},
		{
			"Activity" : "B",
			"PrecedingActivity" : "A",
			"Duration" : "9"
		},
		{
			"Activity" : "C",
			"PrecedingActivity" : "A",
			"Duration" : "7"
		},
		{
			"Activity" : "D",
			"PrecedingActivity" : "B,C",
			"Duration" : "4"
		},
		{
			"Activity" : "E",
			"PrecedingActivity" : "A",
			"Duration" : "8"
		},
		{
			"Activity" : "F",
			"PrecedingActivity" : "D,E",
			"Duration" : "13"
		},
		{
			"Activity" : "G",
			"PrecedingActivity" : "C",
			"Duration" : "12"
		},
		{
			"Activity" : "H",
			"PrecedingActivity" : "F,G",
			"Duration" : "6"
		},
		{
			"Activity" : "I",
			"PrecedingActivity" : "H",
			"Duration" : "8"
		}
	]
}*/
function Temp(){
	for(var i = 0; i < MyJson.Value.length; i++){
		var tempDur = MyJson.Value[i].Duration;
		Dur.push(tempDur);
		var tempPreAct = MyJson.Value[i].PrecedingActivity;
		PreAct.push(tempPreAct);
		var TempAct = MyJson.Value[i].Activity;
		Act.push(TempAct);
	}
	Estimstart();
}
function getValue(){
	id('TempDiv').style.top = -(IP * 10)+"%";
	for(var i = 0; i < IP; i++){
		var ex1 = id('Acvalue'+(i+1)).value;
		var ex2 = id('PreAcvalue'+(i+1)).value;
		var ex3 = id('Durvalue'+(i+1)).value;
		var obj = {
			"Activity" : ex1,
			"PrecedingActivity" : ex2.toUpperCase(),
			"Duration" : ex3
		}
		MyJson.Value.push(obj);
	}
	Temp();
	Process();
}
var Dur = [],Es = [],Ef = [],Ls = [],Lf = [],PreAct = [],Act = [];
function Box(){
	id('Btn').style.display = "none";
	var MainResDiv = document.createElement('div');
	MainResDiv.setAttribute('id','MainResDiv');
	for(var i = 0; i < MyJson.Value.length; i++){
		var ResDiv = document.createElement("div");
		ResDiv.setAttribute('id','ResDiv'+(i+1));
		ResDiv.setAttribute('class','ResDiv');
		for(var j = 0; j < 6; j++){
			var TRD = document.createElement('div');
			TRD.setAttribute('id','TRD'+(j+1));
			TRD.setAttribute('class','TRD');
			TRD.innerText = '0';
			if(j == 1){
				TRD.innerText = MyJson.Value[i].ES;
			}
			else if(j == 2){
				TRD.innerText = MyJson.Value[i].EF;
			}
			else if(j == 0){
				TRD.innerText = MyJson.Value[i].Activity;
			}
			else if(j == 3){
				TRD.innerText = MyJson.Value[i].Duration;
			}
			else if(j == 4){
				TRD.innerText =MyJson.Value[i].LS;
			}
			else if(j == 5){
				TRD.innerText = MyJson.Value[i].LF;
			}
			ResDiv.appendChild(TRD);
			MainResDiv.appendChild(ResDiv);
		}
	}
	id('MainDiv').appendChild(MainResDiv);

}
var es = 0,ES,EF;
var temp = [];
function Estimstart(){
	for(var i = 0; i < MyJson.Value.length; i++){
		temp = [];
		if(PreAct[i] == '-'){
			ES = es;
			EF = Dur[i];
			Es.push(ES);
			
			Ef.push(EF);
			MyJson.Value[i].EF = parseInt(EF);
			MyJson.Value[i].ES = parseInt(ES);
		}
		else{
			var TempPreAct = PreAct[i].split(',');
			for(var j = 0; j < TempPreAct.length; j++){
				var TempIndex = Alphabets.indexOf(TempPreAct[j]);
				temp.push(Ef[TempIndex]);
				if(j == (TempPreAct.length - 1)){
					for(var k = 0; k < temp.length - 1; k++){
						if(temp[k] < temp[k+1]){
							temp[0] = temp[k+1];
						}
					}
					ES = temp[0];
					Es.push(ES);
				}
			}
			EF = parseInt(Dur[i]) + parseInt(Es[i]);
			Ef.push(EF);
			MyJson.Value[i].EF = parseInt(EF);
			MyJson.Value[i].ES = parseInt(ES);
		}
	}
	SucActFind();
}
var LS,LF,v;
var Ans = {
	"Values" : [

	]
}
var SucAct = [];
function SucActFind(){
	for(var i = 0; i < Act.length; i++){
		var A = '';
		for(var j = 0; j < PreAct.length; j++){
			if(PreAct[j].indexOf(Act[i]) != -1){
				A += Act[j];
				A += ',';
			}	
		}
		A = A.slice(0,A.length - 1);
		SucAct.push(A);
	}
	EstimLast();
}
function EstimLast(){
	for(var i = MyJson.Value.length -1; i >= 0; i--){
		temp = [];
		if(SucAct[i] == ''){
			LS = Es[i];
			LF = Ef[i];
			Ls.push(LS);
			Lf.push(LF);
			MyJson.Value[i].LS = parseInt(LS);
			MyJson.Value[i].LF = parseInt(LF);
			MyJson.Value[i].StackValue = (MyJson.Value[i].LS - MyJson.Value[i].ES);
			if(MyJson.Value[i].StackValue == 0){
				MyJson.Value[i].CriticalPath = "Yes";
			}
			else
			MyJson.Value[i].CriticalPath = "No";
		}
		else{
			var TempSucAct = SucAct[i].split(',');
			for(var j = 0; j < TempSucAct.length; j++){
				var TempIndex = Alphabets.indexOf(TempSucAct[j]);
				temp.push(Ls[(MyJson.Value.length - 1) - TempIndex]);

				if(j == (TempSucAct.length - 1)){
					for(var k = 0; k < temp.length - 1; k++){
						if(temp[k] < temp[k+1]){
							if(temp[0] > temp[k]){
								temp[0] = temp[k];
							}
							else
								temp[0] = temp[0];
						}
						else
							temp[0] = temp[k + 1];
					}
					LF = temp[0];
					Lf.push(LF);
					
				}
			}	
			LS = parseInt(Lf[(MyJson.Value.length - 1) - i]) - parseInt(Dur[i]);
			Ls.push(LS);
			MyJson.Value[i].LS = parseInt(LS);
			MyJson.Value[i].LF = parseInt(LF);
			MyJson.Value[i].StackValue = (MyJson.Value[i].LS - MyJson.Value[i].ES);
			if(MyJson.Value[i].StackValue == 0){
				MyJson.Value[i].CriticalPath = "Yes";
			}
			else
			MyJson.Value[i].CriticalPath = "No";
		}
	}
}
var TH = ["Activity","PrecedingActivity","ES","EF","LS","LF","StackValue","CriticalPath"];
function Process(){
	id('MainDiv').style.top = "20%";
	var MyTable = document.createElement('table');
	var Td = document.createElement('tr');
	for(var j = 0; j < TH.length; j++){
		var ActTr = document.createElement('th');
		ActTr.innerText = TH[j];
		Td.appendChild(ActTr);
	}	
	MyTable.appendChild(Td);
	for(var i = 0; i < MyJson.Value.length; i++){
		var Td = document.createElement('tr');
		for(var j = 0; j < TH.length; j++){
			var ActTr = document.createElement('td');
			if(j == 0){
				ActTr.innerText = MyJson.Value[i].Activity;
			}
			else if(j == 1){
				ActTr.innerText = MyJson.Value[i].PrecedingActivity;
			}
			else if(j == 2){
				ActTr.innerText = MyJson.Value[i].ES;
			}
			else if(j == 3){
				ActTr.innerText =  MyJson.Value[i].EF;
			}
			else if(j == 4){
				ActTr.innerText = MyJson.Value[i].LS; 
			}
			else if(j == 5){
				ActTr.innerText = MyJson.Value[i].LF;
			}
			else if(j == 6){
				ActTr.innerText =  MyJson.Value[i].StackValue;
			}
			else if(j == 7){
				ActTr.innerText =   MyJson.Value[i].CriticalPath;
				if(MyJson.Value[i].CriticalPath == "Yes"){
					Td.style.backgroundColor = "#9da2a9";
					Td.style.color = "white";
				}
			}
			Td.appendChild(ActTr);
		}	
		MyTable.appendChild(Td);
	}
	var Btn  = document.createElement('button');
	Btn.innerText = "Show BoxModel";
	Btn.setAttribute('id','Btn');
	Btn.onclick = Box;
	id('MainDiv').appendChild(MyTable);
	id('MainDiv').appendChild(Btn);
	console.log(MyJson);
	// var obj   = {a: 123, b: "4 5 6"};
	var data  = "text/plain;charset=utf-8," + encodeURIComponent(Document.innerHTML);
	// var aa = document.createElement('a');
	// aa.setAttribute("href","data:application/octet-stream;charset=utf-16le;base64,//5mAG8AbwAgAGIAYQByAAoA");
	// aa.innerText = "textfile";
	// console.log(id('MainDiv').innerText);

	var a       = document.createElement('a');
	a.href      = 'data:' + data;
	a.download  = 'data.txt';
	a.innerHTML = 'download .txt file of json';
	// document.getElementById('MainDiv').appendChild(aa);
	document.getElementById('MainDiv').appendChild(a);
}