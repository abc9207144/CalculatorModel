function number(value){
	document.mf.output.value += value;
	}
function remove(){
    document.mf.output.value=" ";
     }   

 function equal(){
    document.mf.output.value=eval(document.mf.output.value);
     }

function present(){
    document.mf.output.value = document.mf.output.value/10;
}


function pm(){
    if(document.mf.output.value>0){
        document.mf.output.value= -document.mf.output.value;
    }
    else{
        document.mf.output.value=Math.abs(document.mf.output.value);
    }
}