const { describe, it } = require('mocha');
const should = require('chai').should();
const missingNum = require('.');

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
