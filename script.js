// Addition
function add(a, b) {
  return a + b;
}

console.log(add(10, 4));

// Subtraction
function subtraction(a, b) {
  return a - b;
}

console.log(subtraction(14, 4));

// Multiplication
function multiplication(a, b) {
  return a * b;
}

console.log(multiplication(10, 4));

// Division
function division(a, b) {
  if (b === 0) {
    return "Nice try! You can't divide by zero";
  }
  return a / b;
}

console.log(division(14, 2));

// Operations
let firstNumber;
let secondNumber;
let operator;
let displayValue = '0';
let waitingForSecondNumber = false;

// Operation
function operate(operator, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Both inputs must be numbers';
  }
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtraction(a, b);
  } else if (operator === '*') {
    return multiplication(a, b);
  } else if (operator === '/') {
    return division(a, b);
  } else return 'Please choose an operator';
}
// for testing
// console.log(operate('/', 10, 0));
// console.log(operate('-', 10, 4));
// console.log(operate('$', 2, 3));
// console.log(operate('+', 5, 3));
// console.log(operate('/', 10, 0));
// console.log(operate('+', 5, 3));
// console.log(operate('/', 10, 0));
// console.log(operate('*', 7, 6));

const display = document.getElementById('display');

const numberButtons = document.querySelectorAll('[data-type="number"]');
const operatorButtons = document.querySelectorAll('[data-type="operator"]');
const functionButtons = document.querySelectorAll('[data-type="function"]');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputNumber(button.dataset.value);
  });
});
function inputNumber(number) {
  if (displayValue === '0' || waitingForSecondNumber) {
    displayValue = number;
    waitingForSecondNumber = false;
  } else {
    displayValue += number;
  }

  display.value = displayValue;
}
const clearButton = document.querySelector('[data-action="clear"]');

clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
  displayValue = '0';
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  waitingForSecondNumber = false;

  display.value = displayValue;
}
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    handleOperator(button.dataset.value);
  });
});
function handleOperator(nextOperator) {
  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondNumber) {
    operator = nextOperator;
    return;
  }

  if (firstNumber === undefined) {
    firstNumber = inputValue;
  } else if (operator) {
    const result = operate(operator, firstNumber, inputValue);
    displayValue = `${result}`;
    display.value = displayValue;
    firstNumber = result;
  }

  waitingForSecondNumber = true;
  operator = nextOperator;
}
const equalsButton = document.querySelector('[data-action="equal"]');

equalsButton.addEventListener('click', () => {
  handleEquals();
});

function handleEquals() {
  if (
    firstNumber === undefined ||
    operator === undefined ||
    waitingForSecondNumber
  ) {
    return;
  }

  const inputValue = parseFloat(displayValue);
  const result = operate(operator, firstNumber, inputValue);

  displayValue = `${result}`;
  display.value = displayValue;

  firstNumber = result;
  waitingForSecondNumber = true;
}
const decimalButton = document.querySelector('[data-action="point"]');

decimalButton.addEventListener('click', () => {
  inputDecimal();
});

function inputDecimal() {
  if (waitingForSecondNumber) {
    displayValue = '0.';
    waitingForSecondNumber = false;
  } else if (!displayValue.includes('.')) {
    displayValue += '.';
  }
  display.value = displayValue;
}
