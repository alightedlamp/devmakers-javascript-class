function computeProductOfAllElements(arr) {
  return arr.length > 0
    ? arr.reduce(function(a, b) {
        return a * b;
      })
    : 0;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output);