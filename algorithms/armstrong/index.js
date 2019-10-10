module.exports = function isArmstrong(num) {
  let result = 0;
  for (let char of String(num)) {
    if (Number(char) ** 3 >= num) {
      return false;
    }
    result += Number(char) ** 3;
  }
  return result === num;
}
