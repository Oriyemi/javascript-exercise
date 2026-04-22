//  Simple Calculator: Build a functional interface for addition, subtraction, multiplication, and division.
// const getDisplay = document.querySelector("#display");
// function appendToDisplay(input) {
//     getDisplay.value += input;
//     // Every time you click a button,it adds the value to the screen

// }
// function clearDisplay() {
//     getDisplay.value = "";

//     // removes everything from the screen
// }
// function calculate() {
//    getDisplay.value=eval(getDisplay.value)
// }

const getDisplay = document.querySelector("#display");

function appendNumber(value) {
    getDisplay.value += value;
}
//  add the number to the screen

let firstNumber = ""
let operator = ""
// variable to store the number and operator

function setOperator(op) {
    firstNumber = getDisplay.value;// save firstnumber
    operator = op;// save operator  
    getDisplay.value = "";// clear the screen so user can type in second number
}
function calculate() {
    let secondNumber = getDisplay.value; // save secondnumber

    let a = Number(firstNumber);
    let b = Number(secondNumber); //  convert string to Number
    let result = 0;

    if (operator === "+") {
        result = a + b;
    }
    else if (operator === "-") {
        result = a - b;
    }
    else if (operator === "*") {
        result = a * b;
    }
    else if (operator === "/") {
        result = a / b;
    }

    getDisplay.value = result;
}
function clearDisplay() {
    getDisplay.value = "";

    // removes everything from the screen
}

