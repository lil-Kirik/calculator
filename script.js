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
    })
})

const op = document.querySelectorAll('.operator')

op.forEach(oper => {
    oper.addEventListener('click', () => {
        firstNumber = currentDisplay;
        operator = oper.textContent;
        currentDisplay = "";
        display.textContent = operator;
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
    display.textContent = currentDisplay;
    console.log(currentDisplay)

})

const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    currentDisplay = ''
    display.textContent = 'стёрто'
    console.log('стёрто')
})