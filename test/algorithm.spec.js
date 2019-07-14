const { describe, it } = require('mocha');
const should = require('chai').should();
const algorithms = require('../algorithms');
const { isArmstrong, fib, missingNum, uniqueNums, validateWithLuhn } = algorithms;

describe('Armstrong', () => {
  it('Should return true if the given number is armstrong number and false otherwise', () => {
    isArmstrong(153).should.be.true;
    isArmstrong(370).should.be.true;
    isArmstrong(407).should.be.true;
    isArmstrong(371).should.be.true;
  });
});

describe('Fibonacci', () => {
  it('Should return the fibonacci equivalent of the given number', () => {
    fib(0).should.equal(0);
    fib(1).should.equal(1);
    fib(2).should.equal(1);
    fib(3).should.equal(2);
    fib(4).should.equal(3);
    fib(5).should.equal(5);
    fib(6).should.equal(8);
    fib(7).should.equal(13);
    fib(8).should.equal(21);
    fib(9).should.equal(34);
    fib(10).should.equal(55);
    fib(50).should.equal(12586269025);
  });
});

describe('MissingNum', () => {
  it('Should should return the missing number in the array', () => {
    missingNum([1, 2, 3, 4, 6, 7, 8]).should.equal(5);
    missingNum([4, 5, 6, 7, 9]).should.equal(8);
    missingNum([10, 12, 13, 14]).should.equal(11);
    missingNum([201, 202, 204]).should.equal(203);
    missingNum([0, 1, 2, 3, 4, 5, 6, 8]).should.equal(7);
  });
  it('Should return zero if there is no missing number', () => {
    missingNum([1, 2, 3, 4]).should.equal(0);
  });
});

describe('uniqueNums', () => {
  it('Should return all unique numbers in an array', () => {
    uniqueNums([1, 1, 2, 2, 3, 3, 4]).should.deep.equal([4]);
    uniqueNums([1, 2, 33, 4, 2, 1]).should.deep.equal([33, 4]);
  });
});

describe('Luhn\'s algoritm', () => {
  it('Should validate an array of numbers', () => {
    validateWithLuhn('4869256870975984').should.be.true;
    validateWithLuhn('4597203494430292').should.be.true;
    validateWithLuhn('4950192288793836').should.be.true;
    validateWithLuhn('4861934280421132').should.be.true;
    validateWithLuhn('4453115147660740').should.be.true;
    validateWithLuhn('4481201955417682').should.be.true;
    validateWithLuhn('1234567898765432').should.be.false;
  })
});
