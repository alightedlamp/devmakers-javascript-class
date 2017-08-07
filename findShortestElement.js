function findShortestElement(arr) {
  if (arr.length > 0) {
    var shortest = arr[0];
    arr.forEach(function(el) {
      if (el.length < shortest.length) {
        shortest = el;
      }
    });
    return shortest;
  }
  else {
    return '';
  }
}