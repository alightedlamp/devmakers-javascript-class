function findMaxLengthOfThreeWords(word1, word2, word3) {
  var maxStr = word1.length;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > maxStr) {
      maxStr = arguments[i].length;
    }
  }
  return maxStr;
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);