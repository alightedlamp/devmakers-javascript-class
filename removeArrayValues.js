function removeArrayValues(obj) {
  Object.keys(obj).map(function(el) {
    if (Array.isArray(obj[el])) {
      delete obj[el];
    }
  });
  return obj;
}