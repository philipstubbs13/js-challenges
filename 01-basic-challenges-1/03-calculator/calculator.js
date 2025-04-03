function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
      }
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
}

module.exports = calculator;
