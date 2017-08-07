function getFirstElementOfProperty(obj, key) {
  return Array.isArray(obj[key])
    ? obj[key][0]
    : undefined;
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);