function getLastElementOfProperty(obj, key) {
  return obj.hasOwnProperty(key) && Array.isArray(obj[key])
    ? obj[key][obj[key].length - 1]
    : undefined;
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output);
