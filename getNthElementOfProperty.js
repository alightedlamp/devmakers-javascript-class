function getNthElementOfProperty(obj, key, n) {
  return obj.hasOwnProperty(key)
    ? obj[key][n]
    : undefined;
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);