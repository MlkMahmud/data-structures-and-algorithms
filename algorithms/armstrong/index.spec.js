const { describe, it } = require('mocha');
const { expect } = require('chai');
const isArmstrong = require('.');

describe('Armstrong', () => {
  it('Should return true if the given number is armstrong number and false otherwise', () => {
    expect(isArmstrong(153)).to.be.true;
    expect(isArmstrong(370)).to.be.true;
    expect(isArmstrong(407)).to.be.true;
    expect(isArmstrong(371)).to.be.true;
    expect(isArmstrong(15)).to.be.false;
  });
});
