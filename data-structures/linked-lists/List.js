const Node = require('./Node');

class List {
  constructor() {
    this._head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() { return this.length }

  push(val) {
    if (!this._head) {
      this._head = new Node(val);
      this.length++;
      return;
    }
    else if (!this.tail) {
      let newNode = new Node(val);
      this._head.next = newNode, this._head.prev = newNode;
      newNode.prev = this._head, newNode.next = this._head;
      this.tail = newNode, this.length++;
      return;
    }
    else {
      let currentTail = this.tail, newNode = new Node(val);
      currentTail.next = newNode, newNode.next = this._head, newNode.prev = currentTail;
      this.tail = newNode, this._head.prev = this.tail;
      this.length++;
      return;
    }
  }

  pop() {
    if (this.size < 1) return;
    else if (!this.tail) {
      this._head = null, this.length--;
      return;
    }
    else if (this.size < 3) {
      this.tail = null, this._head.next = null, this._head.prev = null;
      this.length--;
      return;
    }
    else {
      this.tail = this.tail.prev, this.tail.next = this._head, this._head.prev = this.tail;
      this.length--;
      return;
    }
  }

  insert(val, index) {
    if (index > this.size || index < 0) return;
    else if (index === 0) {
      if (!this._head) {
        this._head = new Node(val);
        this.length++;
        return 'Added ' + val + 'at index ' + index;
      }
      else if (!this.tail) {
        this.tail = this._head, this._head = new Node(val);
        this._head.next = this.tail, this._head.prev = this.tail;
        this.tail.next = this._head, this.tail.prev = this._head;
        this.length++;
        return 'Added ' + val + 'at index ' + index;
      }
      else {
        let oldHead = this._head, newHead = new Node(val);
        oldHead.prev = newHead, this._head = newHead, this._head.next = oldHead;
        this._head.prev = this.tail, this.tail.next = this._head;
        this.length++;
        return 'Added ' + val + 'at index ' + index;
      }
    }
    else if (index === this.size) {
      if (!this.tail) {
        this.tail = new Node(val), this.tail.next = this._head, this.tail.prev = this._head;
        this._head.next = this.tail, this._head.prev = this.tail, this.length++;
        return 'Added ' + val + 'at index ' + index;
      } 
      else {
        let oldTail = this.tail, newTail = new Node(val);
        oldTail.next = newTail, this.tail = newTail, this.tail.prev = oldTail;
        this.tail.next = this._head, this._head.prev = this.tail, this.length++;
        return 'Added ' + val + 'at index ' + index;
      }
    }
    else if (index === this.size - 1) {
      let newNode = new Node(val);
      newNode.prev = this.tail.prev, newNode.next = this.tail, this.tail.prev.next = newNode;
      this.tail.prev = newNode, this.length++;
      return 'Added ' + val + 'at index ' + index;
    }
    else {
      let count = 1, current = this._head.next, len = this.size - 2;
      while (count <= len) {
        if (count === index) {
          let newNode = new Node(val);
          newNode.prev = current.prev, newNode.next = current, current.prev.next = newNode;
          current.prev = newNode, this.length++;
          return 'Added ' + val + 'at index ' + index;
        }
        current = current.next, count++;
      }
    }
  }
  remove(val) {
    let current = this._head, count = 0, len = this.size;
    while (count < len) {
      if (current.data === val) {
        if (count === 0) {
          if (!current.next) {
            this._head = null, this.length--;
            return;
          }
          if (len === 2) {
            this._head = this._head.next, this._head.next = null, this._head.prev = null;
            this.tail = null;
            this.length--;
            return;
          }
          else {
            let newH = this._head.next;
            newH.prev = this._head.prev;
            this._head = newH, this.tail.next = this._head, this.length--;
            return;
          }
        }
        else if (count === this.size - 1) {
          if (len === 2) {
            this._head.next = null, this._head.prev = null, this.tail = null;
            this.length--;
            return;
          }
          else {
            let newTail = this.tail.prev;
            newTail.next = this._head, this._head.prev = newTail;
            this.tail = newTail, this.length--;
            return;
          }
        }
        else {
          current.prev.next = current.next, current.next.prev = current.prev;
          this.length--;
          return;
        }
      }
      current = current.next, count++;
    }
    return -1;
  }
  
  removeFrom(index) {
    if (index >= this.size || index < 0) { return `Index ${index} is out of range`}
    let current = this._head, count = 0, len = this.size;
    while (count < len) {
      if (index === 0) {
        if (!current.next) {
          this._head = null, this.length--;
          return val;
        }
        if (len === 2) {
          this._head = this._head.next, this._head.next = null, this._head.prev = null;
          this.tail = null;
          this.length--;
          return;
        }
        else {
          let newH = this._head.next;
          newH.prev = this._head.prev;
          this._head = newH, this.tail.next = this._head, this.length--;
          return;
        }
      }
      else if (index === this.size - 1) {
        if (len === 2) {
          this._head.next = null, this._head.prev = null, this.tail = null;
          this.length--;
          return;
        }
        else {
          let newTail = this.tail.prev;
          newTail.next = this._head, this._head.prev = newTail;
          this.tail = newTail, this.length--;
          return;
        }
      }
      else if(index === count) {
        current.prev.next = current.next, current.next.prev = current.prev;
        this.length--;
        return;
      }
      current = current.next, count++;
    }
    return -1;
  }
  
  slice(start, stop = this.size) {
    if (stop <= start) {
      this._head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    else if (this.size === 1 || start >= this.size) return;
    else if (this.size === 2) {
      if (start === 0 && stop === 1) {
        this._head.next = null, this._head.prev = null;
        this.tail = null, this.length = 1;
        return;
      }
      else if (start === 1) {
        this._head = this.tail, this._head.next = null, this._head.prev = null;
        this.tail = null, this.length = 1;
        return;
      }
    }
    else {
      let count = 0, current = this._head, len= this.size;
      while (count < len) {
        if (count === start) {
          this._head = current;
          if (stop === 1 || start === len - 1) {
            this._head.next = null, this._head.prev = null;
            this.length = 1, this.tail = null;
            return;
          }
        }
        else if (count === stop - 1) {
          this.tail = current, this.tail.next = this._head, this._head.prev = this.tail;
          this.length = stop <= this.size ? stop - start : this.size - start;
          return;
        }
        count++, current = current.next;
      }
      this.tail.next = this._head, this._head.prev = this.tail;
      this.length = this.size - start;
      return;
    }
  }
  // sort
}

module.exports = List;
