/*


*/

const displayCurrentOpeEl = document.querySelector('.display');
const totalEl = document.querySelector('.total');
const calcBtns = document.querySelectorAll('.btn');

let operator = '';
let firstNum = '';
let secondNum = '';

calcBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const buttonValue = btn.textContent;
    if (
      buttonValue === '=' ||
      buttonValue === 'Delete' ||
      buttonValue === 'C'
    ) {
      if (buttonValue === '=') {
        calculateResult();
      } else if (buttonValue === 'C') {
        clearDisplay();
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

function add(a, b) {
  let operation = a + b;
  return operation;
}

function subtract(a, b) {
  let operation = a - b;
  return operation;
}

function multiply(a, b) {
  let operation = a * b;
  return operation;
}

function divide(a, b) {
  let operation = a / b;
  return operation;
}

function operate(a, b, ope) {
  const toAdd = add(a, b);
  const toSubtract = subtract(a, b);
  const toMultiply = multiply(a, b);
  const toDivide = divide(a, b);

  if (ope === '+') {
    return toAdd;
  } else if (ope === '-') {
    return toSubtract;
  } else if (ope === '×') {
    return toMultiply;
  } else if (ope === '÷') {
    return toDivide;
  } else {
    return;
  }
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
  firstNum = numbers[0].trim();
  secondNum = numbers[1].trim();

  const result = operate(Number(firstNum), Number(secondNum), operator);

  displayCurrentOpeEl.textContent = result;
}

function clearDisplay() {
  displayCurrentOpeEl.textContent = 0;
  operator = '';
  firstNum = '';
  secondNum = '';
}
