function getIndexOf(char, str) {
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}