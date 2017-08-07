function getEvenLengthWordsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj.hasOwnProperty(key)
    ? obj[key].filter(function(el, i) {
        return el.length % 2 === 0;
      })
    : [];
}

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output);