var trailingResult = "";
var operand = "";

document.addEventListener("keydown", keyPress);

function keyPress(e){
    var keyCode = e.keyCode;
    console.log(keyCode);
    
};

function clearDisplay() {

    console.log("Clear was pressed");
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

document.addEventListener("keydown", keyPress);

  function keyPress(e) {
      var keyCode = e.keyCode;
      console.log(keyCode);
      var keyChar = String.fromCharCode(keyCode);

      if (document.getElementById(keyChar) !== null) {
        console.log(keyChar);
    }
  }