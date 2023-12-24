const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = new ListNode(0);
  }

  getUnderlyingList() {
    return this.queue.next;
  }

  enqueue(v) {
    let node = this.queue;
    while (node && node.next) {
      node = node.next;
    }
    node.next = new ListNode(v);
  }

  dequeue() {
    const head = this.queue.next;
    this.queue.next = Boolean(head) ? head.next : null;
    return head.value;
  }
}

module.exports = {
  Queue,
};
