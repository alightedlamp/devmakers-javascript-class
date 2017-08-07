function getLengthOfLongestElement(arr) {
  if (arr.length > 0) {
    var longest = arr[0];
    arr.forEach(function(el) {
      if (longest.length < el.length) {
        longest = el;
      }
    });
    return longest.length;
  }
  else {
    return 0;
  }
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output);