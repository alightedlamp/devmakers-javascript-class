function getEvenElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj.hasOwnProperty(key)
    ? obj[key].filter(function(el) {
        return el % 2 === 0;
      })
    : [];
}