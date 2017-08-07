function countAllCharacters(str) {
  str = str.split('');
  const count = str.reduce(function(letter, count) {
    if (!letter[count]) {
      letter[count] = 0;
    }
    letter[count]++;
    return letter;
  }, {});
  return count;
}

var output = countAllCharacters('banana');
console.log(output);
