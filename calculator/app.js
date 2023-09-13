const displayCurrentOpeEl = document.querySelector('.display');
const totalEl = document.querySelector('.total');
const calcBtns = document.querySelectorAll('.btn');
const operatorBtnEl = document.querySelectorAll('.operator')

let operator = '';
let firstNumber = '';
let secondNumber = '';

calcBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const buttonValue = btn.textContent;
    if (
      buttonValue === '=' ||
      buttonValue === 'Delete' ||
      buttonValue === 'C'
    ) {
      if (buttonValue === '=') {
        displayCurrentOpeEl.innerText === '0' ? displayCurrentOpeEl.textContent = '=' : calculateResult();
      } else if (buttonValue === 'C') {
        clearDisplay();
      } else if (buttonValue === 'Delete') {
        deleteCalculation();
      }
    } else if (buttonValue === '.') {
      if (displayCurrentOpeEl.textContent.includes('.')) {
        return;
      } else {
        showCurrentOperation(buttonValue);
      }
    } else {
      showCurrentOperation(buttonValue); // Display the clicked button into the screen;
    }
  });
});

function calculator(firstNumber, secondNumber, operator){
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const operate = () => {
    const toAdd = add(firstNumber, secondNumber);
    const toSubtract = subtract(firstNumber, secondNumber);
    const toMultiply = multiply(firstNumber, secondNumber);
    const toDivide = divide(firstNumber, secondNumber);

    if (operator === '+') {
      return toAdd;
    } else if (operator === '-') {
      return toSubtract;
    } else if (operator === '×') {
      return toMultiply;
    } else if (operator === '÷') {
      return toDivide;
    } else {
      return;
    }
  }

  return {operate}
}

function showCurrentOperation(buttonValue) {
  let existingValue = displayCurrentOpeEl.textContent;

  if (existingValue === '0') {
    existingValue = ''; // Remove the '0' if it's the first character
  }

  displayCurrentOpeEl.textContent = existingValue + buttonValue;
}

function calculateResult() {
  const expression = displayCurrentOpeEl.textContent.trim();
  const operatorRegex = /[+\-×÷]/;

  operator = expression.match(operatorRegex)[0];

  const numbers = expression.split(operator);
  firstNumber = numbers[0].trim();
  secondNumber = numbers[1].trim();

  const result = calculator(Number(firstNumber), Number(secondNumber), operator);

  displayCurrentOpeEl.textContent = result.operate();
}

function clearDisplay() {
  displayCurrentOpeEl.textContent = 0;
  operator = '';
  firstNumber = '';
  secondNumber = '';
}

function deleteCalculation() {
  let onDisplay = displayCurrentOpeEl.innerText.split('')
  let toDelete = onDisplay.pop()
  displayCurrentOpeEl.textContent = onDisplay.join('');
}

/*
no keyboard support
*/
