function getLargestElement(arr) {
  if (arr.length > 0) {
    var largest = arr[0];
    arr.forEach(function(el) {
      if (el > largest) {
        largest = el;
      }
    });
    return largest;
  }
  else {
    return 0;
  }
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output);
var output = getLargestElement([5, 2, 8, 3]);
console.log(output);