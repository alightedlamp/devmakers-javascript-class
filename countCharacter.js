function countCharacter(str, char) {
  var num = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      num++;
    }
  }
  return num;
}