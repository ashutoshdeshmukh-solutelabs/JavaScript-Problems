var multiply = function (num1, num2) {
  return eval(BigInt(num1) * BigInt(num2)).toString();
};

console.log(multiply(214, 212));

// The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.
