function computeSummationToN(n) {
  var sum = 0;
  for (var i = 0; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(computeSummationToN(6));