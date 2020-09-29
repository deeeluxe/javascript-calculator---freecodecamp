var trailingResult = "";
var operand = "";

document.addEventListener("keydown", keyPress);

function keyPress(e){
    var keyCode = e.keyCode;
    var metaKey = e.metaKey
    console.log(keyCode);

    if (metaKey && keyCode === 48) {
        eject();
    } else if (metaKey && keyCode === 187) {
        arithmetic('*');
    } else if (metaKey && keyCode === 55) {
        arithmetic('/');
    }
    
    switch (keyCode) {
        case 48:
            updateNumber('0');
            break;
        case 49:
            updateNumber('1');
            break;
        case 50:
            updateNumber('2');
            break;
        case 51:
            updateNumber('3');
            break;
        case 52:
            updateNumber('4');
            break;
        case 53:
            updateNumber('5');
            break;
        case 54:
            updateNumber('6');
            break;
        case 55:
            updateNumber('7');
            break;
        case 56:
            updateNumber('8');
            break;
        case 57:
            updateNumber('9');
            break;
        case 190:
            appendDecimal();
            break;
        case 187:
            arithmetic('+');
            break;
        case 189:
            arithmetic('-');
            break;
        case 67:
            clearDisplay();
            break;
    };
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("secondaryDisplay").innerHTML = "";
    operand = "";
    trailingResult = "";
}

function eject() {
    if (operand.length > 0) {
        calculate(trailingResult, operand, document.getElementById("display").innerHTML);    
        document.getElementById("display").innerHTML = trailingResult;
        document.getElementById("secondaryDisplay").innerHTML = trailingResult;
        trailingResult = "";
        operand = "";
    }

}

function appendDecimal() {  
    if (document.getElementById("display").innerHTML % 1 === 0 && document.getElementById("display").innerHTML[document.getElementById("display").innerHTML.length -1] !== ".") {
        document.getElementById("display").innerHTML += ".";
        document.getElementById("secondaryDisplay").innerHTML += ".";
    }
}


function updateNumber(element) {
     if (document.getElementById("display").innerHTML[0] === "0") {
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").innerHTML += element;
        document.getElementById("secondaryDisplay").innerHTML += element;
    } else {
        document.getElementById("display").innerHTML += element;
        document.getElementById("secondaryDisplay").innerHTML += element;
    }
}

function arithmetic(element) {

    if (operand.length > 0) {
        calculate(trailingResult, operand, document.getElementById("display").innerHTML);
        operand = element;
        document.getElementById("secondaryDisplay").innerHTML = trailingResult;
        document.getElementById("secondaryDisplay").innerHTML += operand;
        document.getElementById("display").innerHTML = "";
        
    } else {
        trailingResult = document.getElementById("display").innerHTML;
        operand = element;
        document.getElementById("secondaryDisplay").innerHTML += element;
        document.getElementById("display").innerHTML = "";
    } 
}


function calculate(tr, op, cn) {

    switch (op) {
        case "+":
            trailingResult = parseFloat(tr) + parseFloat(cn);
            break;
        case "-":
            trailingResult = parseFloat(tr) - parseFloat(cn);
            break;
        case "*":
            trailingResult = parseFloat(tr) * parseFloat(cn);
            break;
        case "/":
            trailingResult = parseFloat(tr) / parseFloat(cn);
            break;
    }
}