function squareElements(arr) {
  return arr.map(function(x) {
    return x * x;
  });
}

var output = squareElements([1, 2, 3]);
console.log(output);