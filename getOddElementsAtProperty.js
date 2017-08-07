function getOddElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj.hasOwnProperty(key)
    ? obj[key].filter(function(el) {
        return el % 2 === 1;
      })
    : [];
}
var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output);