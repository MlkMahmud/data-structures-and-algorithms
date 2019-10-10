module.exports = function uniqueNums(nums) {
  const unique = [];
  for (let num of nums) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      unique.push(num);
    }
  }
  return unique;
}
