const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");

const OPERATORS = {
  ADD: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/"
}

class Calculator {
  constructor() {
      this.number1 = 0;
      this.operator;
      this.number2 = 0;
  }

  operate(a, operator, b) {
    this.operator = operator;

    switch (this.operator) {
      case OPERATORS.ADD:
        return this.add(a, b);
      case OPERATORS.SUBTRACT:
        return this.subtract(a, b);
      case OPERATORS.MULTIPLY:
        return this.multiply(a, b);
      case OPERATORS.DIVIDE:
        return this.divide(a, b);
      default:
        break;
    }
  }

  add(a, b) {
    this.number1 = a;
    this.number2 = b;
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "ERROR";
    }

    return a / b;
  }
}

const calculator = new Calculator();
console.log(calculator.operate(50, "*", 5));