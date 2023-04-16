function toRadians (angle) {
	return angle * (Math.PI / 180);
  }
function sin(){
	document.calculator.output.value=Math.sin(toRadians(document.calculator.output.value));
	}

	function cos(){
	document.calculator.output.value=Math.cos(toRadians(document.calculator.output.value));
	}

	function tan(){
	document.calculator.output.value=Math.tan(toRadians(document.calculator.output.value));
	}

	function sec(){
	document.calculator.output.value=1/Math.cos(toRadians(document.calculator.output.value));
	}

	function csc(){
	document.calculator.output.value=1/Math.sin(toRadians(document.calculator.output.value));
	}

	function cot(){
	document.calculator.output.value=1/Math.tan(toRadians(document.calculator.output.value));
	}

	function pi(){
		document.calculator.output.value=document.calculator.output.value*3.14159265359;
	}

	function BACKSPC(){
	var a = document.calculator.output.value;
	document.calculator.output.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calculator.output.value = Math.pow(document.calculator.output.value, 2);
	}

	function cubed(){
	document.calculator.output.value = Math.pow(document.calculator.output.value, 3);
	}

	function sqrt2(){
	document.calculator.output.value = Math.pow(document.calculator.output.value, 1/2);
	}

	function sqrt3(){
	document.calculator.output.value = Math.pow(document.calculator.output.value, 1/3);
	}

	function number(value){
	document.calculator.output.value += value;
	}

	function remove(){
	document.calculator.output.value=" ";
	}

	function equal(){
	document.calculator.output.value=eval(document.calculator.output.value);
	}

	function per() {
		document.calculator.output.value=document.calculator.output.value/100;
	}

