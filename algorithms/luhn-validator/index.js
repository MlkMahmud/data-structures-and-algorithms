module.exports = validateWithLuhn = (digits) => {
  digits = digits.split('');
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) digits[i] -= 9;
  }
  return digits.reduce((a, b) => (+a) + (+b)) % 10 === 0;

};

