function getSmallestElementAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    var smallest = obj[key][0];
    obj[key].forEach(function(el) {
      if (el < smallest) {
        smallest = el;
      }
    });
    return smallest;
  }
  else {
    return;
  }
}

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output);