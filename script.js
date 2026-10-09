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
        
        default: 
            return op1;
    }
}

const calculator = document.querySelector("#calculator");
const display = calculator.querySelector("#display");
const btns = calculator.querySelectorAll(".btn");

const numeric = ".0123456789";
let invalid = 0;
let flag = 0;

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const char = e.target.textContent;

        if(!numeric.includes(char) && char != 'C') {
            if(char === 'AC') {
                display.value = "";
                operand1 = ""; 
                operand2 = "";
                operator = "";
                invalid = 0;
                flag = 0;
            }

            else if(!invalid) {
                const num1 = Number(operand1), num2 = Number(operand2);
                if(char === '=') {
                    display.value = `${Math.round(operate(num1, num2, operator) * 10000) / 10000}`;
                    operand1 = Number(display.value); 
                    operand2 = "";
                    operator = "";
                    flag = 1;
                }
                else {
                    display.value = flag ? `${Math.round(operate(num1, num2, operator) * 10000) / 10000}` : "";
                    operator = char;

                    if(flag) {
                        operand1 = display.value;
                        operand2 = "";
                    }

                    flag = 1;
                }
            }
        }

        else {
            switch(flag) {
                case 0: {
                    if(!(char === '.' && operand1.includes('.'))) {
                        if(char === 'C') operand1 = operand1.slice(0, -1);
                        else operand1 += char 
                        display.value = operand1;
                    }
                    break;
                }

                case 1: {
                    if(!(char === '.' && operand2.includes('.'))) {
                        if(char === 'C') operand2 = operand2.slice(0, -1);
                        else operand2 += char 
                        display.value = operand2;
                    }
                }
            }
        }

        if(char === 'C' && (invalid || display.value.length === 0)) invalid = 1;
        else invalid = numeric.includes(char) || char === 'AC' || char === '=' || char == 'C' ? 0 : 1;

        if(invalid) operator = char;
    });
});

