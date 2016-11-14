var cleared = false;

function show(obj){
	var val = obj.value;
var text = document.getElementById("text");
	//如=͟͟͞͞果=͟͟͞͞再=͟͟͞͞次=͟͟͞͞按=͟͟͞͞下=͟͟͞͞
	if (cleared) {
		text.value = "";
		cleared = false;
	}
	//当text和按下的都是0时
	if (val == "0" && text.value == "0") {
		text.value = parseInt(text.value) ;
	}else if (text.value == "0" && val!="+" && val!="-" && val!="*" && val!="/") {//按下的是数字时
		text.value = parseInt(text.value) + parseInt(val);
	}else{//按下的是运算时
		text.value +=val;
	}
}

function getResult(){
	var text = document.getElementById("text");
	text.value = eval(text.value);
	cleared = true;
}
function funclear(){
	text.value = "0";
	cleared = false;
}
function funback(){
	var text = document.getElementById("text")
	if (text.value == "0" || text.value == "") {
		text.value = "0";
	}else{
		text.value=text.value.slice(0,-1);
	}
}