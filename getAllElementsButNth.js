function getAllElementsButNth(array, n) {
  var idx = array.indexOf(array[n]);
  return array.filter(function(item) {
    return item !== array[n];
  });
}

var output = getAllElementsButNth(['a', 'b', 'c', 'd'], 2);
console.log(output);