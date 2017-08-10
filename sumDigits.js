function sumDigits(num) {
  var arr = num.toString().split('');
  if (arr[0] === '-') {
    arr[0] = arr[0] + arr[1];
    arr.splice(1, 1);
  }
  sum = arr.reduce(function(sum, value) {
    return sum + parseInt(value);
  }, 0);
  return sum;
}

var output = sumDigits(-316);
console.log(output);
