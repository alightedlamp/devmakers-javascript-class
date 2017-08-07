function findMinLengthOfThreeWords(word1, word2, word3) {
  var minStr = word1.length;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length < minStr) {
      minStr = arguments[i].length;
    }
  }
  return minStr;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);