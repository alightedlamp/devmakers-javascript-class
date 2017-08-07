function removeStringValuesLongerThan(num, obj) {
  Object.keys(obj).map(function(el) {
    if (obj[el].length > num) {
      delete obj[el];
    }
  });
  return obj;
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);