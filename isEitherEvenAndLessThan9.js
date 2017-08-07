function isEitherEvenAndLessThan9(num1, num2) {
  function isEven(num) {
    return num % 2 === 0;
  }
  return (isEven(num1) || isEven(num2)) && num1 < 9 && num2 < 9 ? true : false;
}