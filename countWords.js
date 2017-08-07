function countWords(str) {
  if (str.length == 0) {
    return {};
  }
  else {
    var arr = str.split(" ");
    var num = 0;
    var wordCount = arr.reduce(function(word, count) {
      if (!word[count]) word[count] = 0;
      word[count]++;
      return word;
    }, {});
    return wordCount;
  }
}

console.log(countWords(""));
