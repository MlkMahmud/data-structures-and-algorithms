const { describe, it } = require('mocha');
const should = require('chai').should();
const validateWithLuhn = require('.');

describe('Luhn\'s algoritm', () => {
  it('Should validate an array of numbers', () => {
    validateWithLuhn('4869256870975984').should.be.true;
    validateWithLuhn('4597203494430292').should.be.true;
    validateWithLuhn('4950192288793836').should.be.true;
    validateWithLuhn('4861934280421132').should.be.true;
    validateWithLuhn('4453115147660740').should.be.true;
    validateWithLuhn('4481201955417682').should.be.true;
    validateWithLuhn('1234567898765432').should.be.false;
  });
});

