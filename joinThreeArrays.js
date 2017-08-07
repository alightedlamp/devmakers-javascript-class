function joinThreeArrays(arr1, arr2, arr3) {
  var arr = Array.prototype.slice.call(arguments);
  var newArr = [];
  arr.forEach(function(el) {
    newArr = newArr.concat(el);
  });
  return newArr;
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output);