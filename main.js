const previousNumber = document.querySelector('.previousNumber');
const mathSign = document.querySelector('.mathSign');
const currentNumber = document.querySelector('.currentNumber');

const numbersButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const clearHistoryButton = document.querySelector('.history-btn');
const historyUl = document.querySelector('.history');

let result = '';

function displayNumbers() {
    
}

function operate() {

}

function showResult() {

}

function clearScreen() {

}

function clearHistory() {

}


numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', operate)
});
equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);
clearHistoryButton.addEventListener('click', clearHistory)