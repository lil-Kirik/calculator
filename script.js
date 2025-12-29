const display = document.querySelector('.display')
const btns = document.querySelectorAll('.btn');
let currentDisplay = ''

let firstNumber = '';
let operator = '';
let secondNumber = '';

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentDisplay += btn.textContent;
        display.textContent = currentDisplay;
        if (operator != '') {
            display.textContent = `${firstNumber}${operator}${currentDisplay}`
        }
    })
})

const op = document.querySelectorAll('.operator')

op.forEach(oper => {
    oper.addEventListener('click', () => {
        firstNumber = currentDisplay;
        operator = oper.textContent;
        currentDisplay = "";
        display.textContent = `${firstNumber}${operator}`;
        console.log(firstNumber)
        console.log(oper.textContent)
        
    })
})

const equals = document.querySelector('.equals')

equals.addEventListener('click', () => {
    secondNumber = currentDisplay;
    console.log(secondNumber)
    currentDisplay = "";
    switch (operator) {
        case "+":
            currentDisplay = +firstNumber + +secondNumber;
            break;
        case "-":
            currentDisplay = +firstNumber - +secondNumber;
            break;
        case "*":
            currentDisplay = +firstNumber * +secondNumber;
            break;
        case "/":
            currentDisplay = +firstNumber / +secondNumber;
            break;
        default:
            break;
    }
    display.textContent = `${firstNumber}${operator}${secondNumber}=${currentDisplay}`;
    console.log(currentDisplay)
    firstNumber = ''
    operator = ''
    currentDisplay = ''
})

const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    currentDisplay = ''
    display.textContent = ''
})