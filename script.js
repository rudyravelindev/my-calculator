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

console.log(operate('/', 10, 0)); // error message
console.log(operate('-', 10, 4)); // Should be 6
console.log(operate('$', 2, 3)); // Please choose an operator
console.log(operate('+', 5, 3)); // Should be 8
console.log(operate('/', 10, 0)); // error message
