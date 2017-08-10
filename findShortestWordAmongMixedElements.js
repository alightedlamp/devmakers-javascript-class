function findShortestWordAmongMixedElements(arr) {
  return arr.filter((el) => {
    return typeof el === 'string'
  })
  .reduce((shortest, value) => {
    if (shortest === '') {
      shortest = value;
    }
    else if (value.length < shortest.length) {
      shortest = value;
    }
    return shortest;
  }, '');
}

var output = findShortestWordAmongMixedElements([1, 'hi', 'yo', 'one', 'great']);
console.log(output);