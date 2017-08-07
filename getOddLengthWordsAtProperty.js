function getOddLengthWordsAtProperty(obj, key) {
  return obj.hasOwnProperty(key) && Array.isArray(obj[key])
    ? obj[key].filter(function(el) {
        return el.length % 2 === 1;
      })
    : [];
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);