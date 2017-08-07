function getAllKeys(obj) {
  var arr = [];
  for (key in obj) {
    arr.push(key);
  }
  return arr;
}

var obj = {
  name : 'Sam',
  age : 25,
  hasPets : true
};
getAllKeys(obj);