/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @returns A Listnode from array of numbers
 */
export const arrayToListNode = (nums: number[], reverse: boolean): ListNode | null => {
    const arr = reverse ? nums : nums.reverse();
    return arr.reduce((acc: ListNode, curr: number) => {
        acc = acc == null ? new ListNode(curr) : new ListNode(curr, acc);
        return acc;
    }, null);
};

/* Turn Linked List into a number */
export const getNumber = (list: ListNode | null): number => {
    if (list == null) {
        return 0;
    }
    let currentNode = list;
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
    return parseInt(output.join(""));
};
