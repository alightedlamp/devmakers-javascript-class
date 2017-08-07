function listAllValues(obj) {
  var arr = [];

  for (key in obj) {
    arr.push(obj[key]);
  }

  return arr;
}

var obj = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};
listAllValues(obj);