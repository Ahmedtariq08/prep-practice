"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    queue;
    constructor(q) {
        this.queue = q ?? [];
    }
    enqueue = (element) => {
        this.queue.unshift(element);
        return true;
    };
    dequeue = () => {
        if (this.queue.length > 0) {
            const [firstElement, ...rest] = this.queue;
            this.queue = rest;
            return true;
        }
        return false;
    };
    head = () => {
        return this.queue[0];
    };
}
const q = new Queue();
const head = q.head();
console.log(head);
//# sourceMappingURL=queue.js.map