function getAllWords(str) {
  return str.length > 0 ? str.split(" ") : [];
}

console.log(getAllWords(""));