function filterEvenLengthWords(words) {
  return words.filter(function(word) {
    return word.length % 2 === 0;
  });
}