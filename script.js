//mathematical functions
const add = ((a,b) => a + b);
const subtract = ((a,b) => a - b);
const multiply = ((a,b) => a * b);
const divide = ((a,b) => a / b);

//operator function
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
let displayValue = 0;
const displayDiv = document.getElementById('displayDiv');
displayDiv.textContent = displayValue;

let numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach(btn => btn.addEventListener('click', function(event) {
    event.preventDefault();
    displayValue = btn.value;
    displayDiv.textContent = displayValue;
}));