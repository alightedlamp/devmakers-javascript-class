function getLargestElementAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    var largest = obj[key][0];
    obj[key].forEach(function(el) {
      if (largest < el) {
        largest = el;
      }
    });
    return largest;
  }
  else {
    return;
  }
}

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output);