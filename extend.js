function extend(obj1, obj2) {
  Object.keys(obj2).map(function(el) {
    console.log(el);
    if (!(el in obj1)) {
      obj1[el] = obj2[el];
    }
  });
  return obj1;
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

console.log(extend(obj1, obj2));