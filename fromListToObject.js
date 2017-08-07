function fromListToObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      obj[array[i][0]] = array[i][j];
    }
  }
  return obj;
}

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
fromListToObject(arr);