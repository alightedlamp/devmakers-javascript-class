function getLengthOfThreeWords(word1, word2, word3) {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i].length;
  }
  return sum;
}

console.log(getLengthOfThreeWords('hello', 'hi', 'yep'));