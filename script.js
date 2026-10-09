function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operand1 = "", operand2 = "", operator = "";

function operate(op1, op2, op) {
    switch(op) {
        case '+':
            return add(op1, op2);
            break;

        case '-':
            return subtract(op1, op2);
            break;
        
        case 'x':
            return multiply(op1, op2);
            break;

        case '/':
            return divide(op1, op2);
            break;
    }
}

const calculator = document.querySelector("#calculator");
const display = calculator.querySelector("#display");
const btns = calculator.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        operand1 += e.target.textContent;
        display.value = operand1;
    });
});