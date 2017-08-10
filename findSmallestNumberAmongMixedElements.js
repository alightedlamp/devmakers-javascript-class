function findSmallestNumberAmongMixedElements(arr) {
  return arr.filter((el) => {
    return typeof el === 'number'
  })
  .reduce((smallest, value) => {
    if (smallest === 0) {
      smallest = value;
    }
    else if (value < smallest) {
      smallest = value;
    }
    return smallest;
  }, 0);
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);