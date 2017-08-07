function removeOddValues(obj) {
  Object.keys(obj).map(function(el) {
    if (obj[el] % 2 == 1) {
      delete obj[el];
    }
  });
  return obj;
}