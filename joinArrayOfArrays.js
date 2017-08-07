function joinArrayOfArrays(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(b);
  });
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output);