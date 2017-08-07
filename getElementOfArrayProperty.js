function getElementOfArrayProperty(obj, key, index) {
  return Array.isArray(obj[key]) && obj[key].length >= index
    ? obj[key][index]
    : undefined;
}

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output);