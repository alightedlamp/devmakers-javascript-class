function getProductOfAllElementsAtProperty(obj, key) {
  var arr = obj[key];
  return Array.isArray(arr) && arr.length > 0
    ? arr.reduce(function(a, b) {
        return a * b
      })
    : 0;
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);