class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
    this._prev = null;
  }

  get data() { return this._data; }
  get next() { return this._next; }
  get prev() { return this._prev; }
  set next(val) { this._next = val; }
  set prev(val) { this._prev = val; }
}

module.exports = Node;
