function convertObjectToList(obj) {
  var arr = [];

  Object.keys(obj).forEach(function(key) {
    arr.push([key, obj[key]]);
  });

  return arr;
}

convertObjectToList(
  {
    name: 'Holly',
    age: 35,
    role: 'producer'
  })