function getElementsGreaterThan10AtProperty(obj, key) {
  const newArr = obj.hasOwnProperty(key) && Array.isArray(obj[key])
    ? obj[key].filter(function(el, i) {
        return el > 10;
      }, [])
    : [];
  return newArr;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);