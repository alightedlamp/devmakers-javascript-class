function getElementsThatEqual10AtProperty(obj, key) {
  const newArr = [];
  if (obj.hasOwnProperty(key)) {
    for (var i = 0; i < obj[key].length; i++) {
      if (obj[key][i] === 10) {
        newArr.push(obj[key][i]);
      }
    }
    return newArr;
  }
  else {
    return newArr;
  }
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);