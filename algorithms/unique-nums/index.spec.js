const { describe, it } = require('mocha');
const should = require('chai').should();
const uniqueNums = require('.');

describe('uniqueNums', () => {
  it('Should return all unique numbers in an array', () => {
    uniqueNums([1, 1, 2, 2, 3, 3, 4]).should.deep.equal([4]);
    uniqueNums([1, 2, 33, 4, 2, 1]).should.deep.equal([33, 4]);
  });
});
