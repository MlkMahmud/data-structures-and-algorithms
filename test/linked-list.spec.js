const { describe, it } = require('mocha');
const should = require('chai').should();
const List = require('../data-structures/linked-lists/List');


const list = new List();

describe('Linked list', () => {
  describe('List structure', () => {
    it('Should have length, head and tail properties', () => {
      list.should.have.property('_head', null);
      list.should.have.property('tail', null);
      list.should.have.property('length', 0);
    });
  });
  describe('Push', () => {
    it('Should push the given value to the end of the list', () => {
      list.push(1);
      list.should.have.property('length', 1);
      list._head.should.have.property('next', null);
      list._head.should.have.property('prev', null);
      list.should.have.property('tail', null);
      for (let i = 2; i < 6; i++) list.push(i);
      list.should.have.property('length', 5);
      list._head.data.should.equal(1);
      list._head.next.data.should.equal(2)
      list._head.prev.data.should.equal(5)
      list.tail.data.should.equal(5);
      list.tail.prev.data.should.equal(4);
      list.tail.next.data.should.equal(1);
    });
  });
  describe('Pop', () => {
    it('Should remove the last value from the list', () => {
      list.tail.data.should.equal(5);
      list.size.should.equal(5);
      list.pop();
      list.tail.data.should.equal(4);
      list.size.should.equal(4);
      for (let i = 0; i < 4; i++) list.pop();
      list.size.should.equal(0);
      list.should.have.property('_head', null);
      list.should.have.property('tail', null);
    });
  });
  describe('Insert', () => {
    it('Should insert the given value at the given index', () => {
      for (let i = 5; i > 0; i--) list.insert(i, 0);
      list._head.data.should.equal(1);
      list.tail.data.should.equal(5);
      list.size.should.equal(5);
      list.insert(6, list.size);
      list.tail.data.should.equal(6);
      list.tail.next.data.should.equal(1);
      list._head.prev.data.should.equal(6);
      list.insert(23, 1);
      list._head.next.data.should.equal(23);
      list.insert(35, list.size - 1);
      list.tail.prev.data.should.equal(35);
      list.size.should.equal(8);
    });
  });
  describe('Remove', () => {
    it('Should remove the given value from the list if it exists', () => {
      list.remove(1);
      list._head.data.should.equal(23);
      list.size.should.equal(7);
      list.remove(6);
      list.tail.data.should.equal(35);
      list.tail.next.data.should.equal(list._head.data);
      list._head.prev.data.should.equal(list.tail.data);
      list.size.should.equal(6);
    });
    it('Should return -1 if the given value does not exist', () => {
      list.remove(1).should.equal(-1);
      list.size.should.equal(6);
    });
  });
  describe('RemoveFrom', () => {
    it('Should remove the value at the given index', () => {
      list._head.data.should.equal(23);
      let newHead = list._head.next.data;
      list.removeFrom(0);
      list._head.data.should.equal(newHead);
      list.size.should.equal(5);
      list.tail.next.data.should.equal(2);
      list.tail.data.should.equal(35);
      list.removeFrom(list.size - 1);
      list.tail.data.should.equal(5);
      list.tail.next.data.should.equal(list._head.data);
      list.size.should.equal(4);
      for (let i = 0; i < 4; i++) list.pop();
    });
  });
  describe('Slice', () => {
    it('Should return a sliced list', () => {
      for (let i = 1; i <= 10; i++) list.push(i);
      list.size.should.equal(10);
      list.slice(0, 6);
      list._head.data.should.equal(1);
      list.tail.data.should.equal(6);
      list.size.should.equal(6);
    });
    it('Should assume the stop value as the end of the list', () => {
      list.slice(1);
      list.size.should.equal(5);
      list._head.data.should.equal(2);
      list._head.prev.data.should.equal(6);
      list.tail.next.data.should.equal(2);
      list.slice(2, 5);
      list._head.data.should.equal(4);
      list._head.prev.data.should.equal(6);
      list.tail.data.should.equal(6);
      list.tail.next.data.should.equal(4);
      list.size.should.equal(3);
    });
    it('Should return an empty list if given stop index <= start index', () => {
      list.slice(0, 0);
      list.should.has.property('_head', null);
      list.should.have.property('tail', null);
      list.size.should.equal(0);
    });
  });
});
