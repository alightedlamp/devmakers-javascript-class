function areBothOdd(num1, num2) {
  function isOdd(num) {
    return num % 2 === 1;
  }
  return isOdd(num1) && isOdd(num2);
}