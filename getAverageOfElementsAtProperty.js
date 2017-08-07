function getAverageOfElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length > 0
    ? obj[key].reduce(function(a, b) {
        return a + b;
      }, 0) / obj[key].length
    : 0;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);