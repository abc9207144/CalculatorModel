function number(value){
	document.mf.output.value += value;
	}
function remove(){
    document.mf.output.value=" ";
     }   

 function equal(){
    document.mf.output.value=eval(document.mf.output.value);
     }

     function per() {
        document.mf.output.value=document.mf.output.value/100;
     }
/*function per() {
    let inputNum = parseFloat(document.mf.output.value);
    let decimalPlaces = Math.max(0, Math.ceil(Math.log10(inputNum + 1)));
    let result = (inputNum / 100).toFixed(decimalPlaces);
    document.mf.output.value = result;
}
*/

function pm(){
    if(document.mf.output.value>0){
        document.mf.output.value= -document.mf.output.value;
    }
    else{
        document.mf.output.value=Math.abs(document.mf.output.value);
    }
}
var music = new Audio('../sound/soundeffect.mp3');
music.volume = 0.2;
function clicksound(){       
        music.play();
        }

