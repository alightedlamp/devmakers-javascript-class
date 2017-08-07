function removeEvenValues(obj) {
  Object.keys(obj).map(function(el) {
    if (obj[el] % 2 == 0) {
      delete obj[el];
    }
  });
  return obj;
}