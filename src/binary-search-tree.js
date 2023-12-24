const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  arr = [];

  root() {
    return this.arr[0] !== undefined ? new Node(this.arr[0]) : null;
  }

  add(num) {
    const i = this._search(num);
    this.arr.splice(i, 0, num);
  }

  has(num) {
    const i = this._search(num);
    return this.arr[i] === num;
  }

  find(num) {
    const i = this._search(num);
    if (this.arr[i] === num) {
      return new Node(num);
    }
    return null;
  }

  remove(num) {
    const i = this._search(num);
    if (this.arr[i] !== num) {
      return;
    }
    this.arr.splice(i, 1);
  }

  min() {
    return this.arr[0];
  }

  max() {
    return this.arr[this.arr.length - 1];
  }

  _search(num) {
    const arr = this.arr;
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (num === arr[mid]) {
        return mid;
      }
      if (num < arr[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
}

module.exports = {
  BinarySearchTree,
};
