function getLargestNumberAmongMixedElements(arr) {
  arr = arr.filter((el) => {
    return typeof el === 'number';
  })
  return arr.length > 0
    ? arr.reduce((largest, value) => {
        if (value > largest) {
            largest = value;
        }
        return largest;
      })
    : 0;
}

console.log(getLargestNumberAmongMixedElements([]));
console.log(getLargestNumberAmongMixedElements([-1, -5, -7, -10]));
console.log(getLargestNumberAmongMixedElements(['one', 1, 5, 'three']));
console.log(getLargestNumberAmongMixedElements(['one', 'two', 'three']));