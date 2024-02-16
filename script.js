//mathematical functions
const add = ((a,b) => a + b);
const subtract = ((a,b) => a - b);
const multiply = ((a,b) => a * b);
const divide = ((a,b) => a / b);

//operator function
let operator = '';
let operate = function(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                return "ERROR";
            };
            result = divide(num1, num2);
            break;
    }
    return parseFloat(result.toFixed(5));
}

//display element
let displayValue = '';
let num1str = '';
const displayDiv = document.getElementById('displayDiv');
displayDiv.textContent = 0;
let didEquation = false;

//number buttons to fill display and become value for numbers in operate function
let numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach(btn => btn.addEventListener('click', function(event) {
    event.preventDefault();
    //reset if just completed an equation and started typing new numbers
    if (didEquation === true) {
        displayValue = '';
        didEquation = false;
    }
    displayValue += btn.value;
    displayDiv.textContent = displayValue;
}));

//operator buttons
let mathBtns = document.querySelectorAll('.mathBtn');
mathBtns.forEach(btn => btn.addEventListener('click', function(event) {
    event.preventDefault();
    //if num1str and operator exists, aka already entered a mathematical operation and want to string another one to the answer
    if (num1str && operator) {
        let num1 = parseFloat(num1str);
        let num2 = parseFloat(displayValue);
        let result = operate(num1, num2, operator);
        displayValue = result;
        displayDiv.textContent = displayValue;
        if (displayDiv.textContent === 'ERROR') {
            alert("you can't do that silly! :c");
        }
    };
    operator = btn.value;
    num1str = displayValue;
    displayValue = '';
}));

//equal button
let equalBtn = document.getElementById('equalBtn');
equalBtn.addEventListener('click', function() {
    if (num1str && operator) {
        let num1 = parseFloat(num1str);
        let num2 = parseFloat(displayValue);
            console.log({num2});
        let result = operate(num1, num2, operator);
        displayValue = result.toString();
        displayDiv.textContent = displayValue;
        num1str = displayValue;
        operator = '';
        console.log({displayValue});
        didEquation = true;
        if (displayDiv.textContent === 'ERROR') {
            alert("you can't do that silly! :c");
        }
    }
})

//clear button
let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function() {
    displayValue = '';
    num1str = '';
    num1 = '';
    num2 = '';
    operator = '';
    displayDiv.textContent = 0;
    didEquation = false;
})

//backspace
let backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', function() {
    displayValue = '';
    displayDiv.textContent = 0;
})

//decimal button
let decimalBtn = document.getElementById('decimalBtn');
decimalBtn.addEventListener('click', function(event) {
   // event.preventDefault();
    if (!displayValue.includes('.')) {
        displayValue += decimalBtn.value;
        displayDiv.textContent = displayValue;
    }})