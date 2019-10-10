const { describe, it } = require('mocha');
const should = require('chai').should();
const fib = require('.');

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
