module.exports = function fib(num) {
  const nums = [0, 1, 1];
  if (num < 0) {
    return 0;
  }

  for (let i = 2; i < num; i++) {
    nums.push(nums[i - 1] + nums[i]);
  }
  return nums[num];
}
