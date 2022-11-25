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


const calculator = {
    displayNumbers() {
        if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
        if (this.textContent === '.' && currentNumber.innerHTML === '') {
            return currentNumber.innerHTML = '0.';
        }

        currentNumber.innerHTML += this.textContent;
    },

    operate() {
        if (currentNumber.innerHTML === '' && this.textContent === '-') {
            currentNumber.innerHTML = '-';
            return;
        } else if (currentNumber.innerHTML === '') {
            return;
        }

        if (mathSign.innerHTML !== '') {
            calculator.calc();
        }
        previousNumber.innerHTML = currentNumber.innerHTML;
        mathSign.innerHTML = this.textContent;
        currentNumber.innerHTML = ''

    },

    calc() {
        if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;
        let a = Number(currentNumber.innerHTML);
        let b = Number(previousNumber.innerHTML);
        let operator = mathSign.innerHTML;

        switch (operator) {
            case '+': result = a + b; break;
            case '-': result = b - a; break;
            case 'x': result = a * b; break;
            case ':': result = b / a; break;
            case '2^': result = b ** a; break;
        }

        calculator.addToHistory();
        calculator.show();
    },

    show() {
        clearHistoryButton.style.display = 'block';
        currentNumber.innerHTML = result;
        previousNumber.innerHTML = '';
        mathSign.innerHTML = '';
    },

    clearScreen() {
        result = '';
        currentNumber.innerHTML = '';
        previousNumber.innerHTML = '';
        mathSign.innerHTML = '';
    },

    addToHistory() {
        const newHistoryItem = document.createElement('li');
        newHistoryItem.innerHTML = ` ${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
        newHistoryItem.classList.add('history-item');
        historyUl.appendChild(newHistoryItem)
    },

    clearHistory() {
        historyUl.textContent = ''
        clearHistoryButton.style.display = 'none';
    }
}



numbersButtons.forEach((button) => button.addEventListener('click', calculator.displayNumbers));
operatorButtons.forEach((button) => button.addEventListener('click', calculator.operate));
equalsButton.addEventListener('click', calculator.calc);
clearButton.addEventListener('click', calculator.clearScreen);
clearHistoryButton.addEventListener('click', calculator.clearHistory)