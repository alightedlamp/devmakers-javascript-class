function findSmallestElement(arr) {
  if (arr.length > 0) {
    var smallest = arr[0];
    arr.forEach(function(el) {
      if (el < smallest) {
        smallest = el;
      }
    });
    return smallest;
  }
  else {
    return 0;
  }
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output);