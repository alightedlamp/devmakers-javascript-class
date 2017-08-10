function getLongestWordOfMixedElements(arr) {
  return arr.filter(function(el) {
    return typeof el === 'string';
  })
  .reduce(function(longest, value) {
    if (value.length > longest.length) {
      longest = value;
    }
    return longest;
  }, '');
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);