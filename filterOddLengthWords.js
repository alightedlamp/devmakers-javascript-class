function filterOddLengthWords(words) {
  return words.filter(function(el) {
    return el.length % 2 === 1;
  })
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output);