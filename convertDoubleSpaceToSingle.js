function convertDoubleSpaceToSingle(str) {
  str = str.split("  ");
  str = str.join(" ");
  return str;
}