const RESULT = document.getElementById("RESULT");
const CALC = document.getElementById("CALC");

const backBTN = document.getElementById("backBTN");
const clearmaker = document.getElementById("clearmaker");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");

const SUM = document.getElementById("SUM");
const SUB = document.getElementById("SUB");
const MUL = document.getElementById("MUL");
const DIV = document.getElementById("DIV");

const numDOT = document.getElementById("numDOT");
const EqualsTO = document.getElementById("EqualsTO");

let riss = String();


function number(value){
    const arr = ['+','-','/','*'];

    riss.


    riss += value;
    CALC.value = riss;
}

EqualsTO.onclick = function(){
    if(riss.length == 0){
        console.warn("Cannot show result : Please Enter any Calculation");
        window.alert("Cannot show result : Please Enter any Calculation");
    } else {
        let calculation = eval(riss);
        RESULT.value = calculation;
    }
}

backBTN.onclick = function(){
    riss = riss.slice(0,riss.length-1);
    CALC.value = riss;
}

clearmaker.onclick = function(){
    riss = riss.slice(0,0);
    CALC.value = riss;
    RESULT.value = riss;
}
