function getSumOfAllElementsAtProperty(obj, key) {
  return obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0
    ? obj[key].reduce((sum, value) => {
        return sum + value;
      })
    : 0;
}

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output);
