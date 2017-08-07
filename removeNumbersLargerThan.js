function removeNumbersLargerThan(num, obj) {
  Object.keys(obj).map(function(el) {
    if (obj[el] > num) {
      delete obj[el];
    }
  });
  return obj;
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);