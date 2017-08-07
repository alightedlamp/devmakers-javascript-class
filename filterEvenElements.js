function filterEvenElements(arr) {
  return arr.filter(function(x) {
    return x % 2 === 0;
  });
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output);