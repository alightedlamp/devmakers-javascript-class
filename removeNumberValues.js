function removeNumberValues(obj) {
  Object.keys(obj).map(function(el) {
    if (typeof obj[el] === 'number') {
      delete obj[el];
    }
  })
}