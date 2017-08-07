function computeAverageOfNumbers(nums) {
  return nums.length > 0
  ? (nums.reduce(function(a, b) {
      return a + b;
    }, 0)) / nums.length
  : 0;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);