function sin(){
	document.calculator.output.value=Math.sin(document.calculator.output.value);
	}

	function cos(){
	document.calculator.output.value=Math.cos(document.calculator.output.value);
	}

	function tan(){
	document.calculator.output.value=Math.tan(document.calculator.output.value);
	}

	function BACKSPC(){
	var a = document.calculator.result.value;
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

	