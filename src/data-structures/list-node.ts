export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/* Returns a Listnode from array of numbers */
export const arrayToListNode = (nums: number[], reverse: boolean): ListNode | null => {
    const arr = reverse ? nums : nums.reverse();
    return arr.reduce((acc: ListNode, curr: number) => {
        acc = acc == null ? new ListNode(curr) : new ListNode(curr, acc);
        return acc;
    }, null);
};

/* Returns an array of number from ListNode */
export const listNodeToArray = (node: ListNode | null) => {
    if (node == null) {
        return [];
    }
    let currentNode = node;
    let hasNext = true;
    const output: number[] = [];
    while (hasNext) {
        output.push(currentNode.val);
        if (!currentNode.next) {
            hasNext = false;
        } else {
            currentNode = currentNode.next;
        }
    }
    return output;
};

/* Turn Linked List into a number */
export const getNumber = (list: ListNode | null): number => {
    const arr = listNodeToArray(list);
    return arr.length > 0 ? parseInt(arr.join("")) : 0;
};
