class Queue<T> {
    private queue: T[];

    constructor(q?: T[]) {
        this.queue = q ?? [];
    }

    public enqueue = (element: T): boolean => {
        this.queue.unshift(element);
        return true;
    };

    public dequeue = (): boolean => {
        if (this.queue.length > 0) {
            const [firstElement, ...rest] = this.queue;
            this.queue = rest;
            return true;
        }
        return false;
    };

    public head = (): T | undefined => {
        return this.queue[0];
    };
}

const q = new Queue<number>();
const head = q.head();
console.log(head);
