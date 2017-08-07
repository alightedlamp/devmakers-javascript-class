function isEitherEvenOrAreBoth7(num1, num2) {
  function isEven(num) {
    return num % 2 === 0;
  }
  return ((isEven(num1) || isEven(num2)) || (num1 === 7 && num2 === 7)) ? true : false;
}

console.log(isEitherEvenOrAreBoth7(7, 7));