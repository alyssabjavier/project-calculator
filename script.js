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
            result = divide(num1, num2);
            break;
    }
    return result;
}

//populating display
let displayValue = '';
let num1str = '';
const displayDiv = document.getElementById('displayDiv');
displayDiv.textContent = displayValue;

let numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach(btn => btn.addEventListener('click', function(event) {
    event.preventDefault();
    displayValue += btn.value;
    displayDiv.textContent = displayValue;
}));

let mathBtns = document.querySelectorAll('.mathBtn');
mathBtns.forEach(btn => btn.addEventListener('click', function(event) {
    event.preventDefault();
    operator = btn.value;
    num1str = displayValue;
        console.log({operator});
        console.log(btn.value);
        console.log({displayValue})
        console.log({num1str});
     displayValue = '';
         console.log({displayValue});
    // displayDiv.textContent = displayValue;
}));

let equalBtn = document.getElementById('equalBtn');
equalBtn.addEventListener('click', function() {
    let num1 = parseFloat(num1str);
    let num2 = parseFloat(displayValue);
        console.log({num2});
    let result = operate(num1, num2, operator);
    displayDiv.textContent = result;
})
