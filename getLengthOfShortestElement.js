function getLengthOfShortestElement(arr) {
  if (arr.length > 0) {
    var shortest = arr[0].length;
    arr.forEach(function(el) {
      if (el.length < shortest) {
        shortest = el.length;
      }
    });
    return shortest;
  }
  else {
    return 0;
  }
}