function computeSumOfAllElements(arr) {
  return arr.length > 0
    ? arr.reduce(function(a, b) {
        return a + b;
      })
    : 0;
}