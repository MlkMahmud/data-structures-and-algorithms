function isArmstrong(num) {
  let result = 0;
  for(let char of String(num)) {
    if(Number(char)**3 >= num) {
      return false;
    }
    result += Number(char)**3;
  }
  return result === num;
}

function fib(num) { 
  const nums = [0, 1, 1];
  for (let i = 2; i < num; i++){
    nums.push(nums[i - 1] + nums[i]);
  }
  return nums[num];
}

function missingNum(arr) {
  for (let i = 0, len = arr.length - 1; i < len; i++) { 
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return 0;
}

function uniqueNums(nums) {
  const unique = [];
  for (let num of nums) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      unique.push(num);
    }
  }
  return unique;
}

const validateWithLuhn = (digits) => {
  digits = digits.split('');
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) digits[i] -= 9;
  }
  return digits.reduce((a, b) => (+a) + (+b)) % 10 === 0;
  
};

module.exports = { isArmstrong, fib, missingNum, uniqueNums, validateWithLuhn };
