var HLA = 0,IR = 0,LT = 0;
function idd(id){
	return document.getElementById(id);
}
function HLAvalue(){
	HLA = idd("HLA").value;
	idd('HLAresult').value = HLA;
}
function IRvalue(){
	IR = idd("IR").value;
	idd('IRresult').value = IR;
	IR = IR/12/100;
	console.log(IR);
}
function LTvalue(){
	LT = idd("LT").value;
	idd('LTresult').value = LT;
	LT = LT * 12;
	EMI();
}
function EMI(){
	idd('EMIbox').innerHTML = "<h4>Loan EMI</h4>";
	idd('TP').innerHTML = "<h4>Total Amount</h4>";
	idd('TIP').innerHTML = "<h4>Total Interest Payable</h4>";
	var EMI = Math.round((HLA * IR) * ((Math.pow((1 + IR),LT))/(Math.pow((1 + IR),LT) - 1)));
	idd('EMIbox').innerHTML += EMI;
	idd('TP').innerHTML += EMI * LT;
	idd('TIP').innerHTML += EMI * LT - HLA;
}