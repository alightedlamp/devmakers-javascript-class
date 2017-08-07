function keep(array, keeper) {
  return array.filter(function(el) {
    return el === keeper;
  });
}

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output);