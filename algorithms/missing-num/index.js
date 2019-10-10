module.exports = function missingNum(arr) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return 0;
}

