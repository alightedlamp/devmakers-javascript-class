function removeStringValues(obj) {
  Object.keys(obj).map(function(el) {
    if (typeof obj[el] === 'string') {
      delete obj[el];
    }
  });
}