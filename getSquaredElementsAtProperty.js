function getSquaredElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj.hasOwnProperty(key)
    ? obj[key].map(function(el) {
        return el ** 2;
      })
    : [];
}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output);