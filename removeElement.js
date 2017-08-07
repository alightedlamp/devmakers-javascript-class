function removeElement(array, discarder) {
  return array.filter(function(el) {
    return el !== discarder;
  });
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);