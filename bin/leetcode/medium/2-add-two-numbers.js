"use strict";
// https://leetcode.com/problems/add-two-numbers/description/
Object.defineProperty(exports, "__esModule", { value: true });
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
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
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/* Turn array of numbers into a Linked List */
const getLinkedList = (nums, reverse) => {
    const arr = reverse ? nums : nums.reverse();
    return arr.reduce((acc, curr) => {
        acc = acc == null ? new ListNode(curr) : new ListNode(curr, acc);
        return acc;
    }, null);
};
/* Turn Linked List into a number */
const getNumber = (list) => {
    if (list == null) {
        return 0;
    }
    let currentNode = list;
    let hasNext = true;
    const output = [];
    while (hasNext) {
        output.push(currentNode.val);
        if (!currentNode.next) {
            hasNext = false;
        }
        else {
            currentNode = currentNode.next;
        }
    }
    return parseInt(output.join(""));
};
function addTwoNumbers(l1, l2) {
    const sum = getNumber(l1) + getNumber(l2);
    const numArray = sum
        .toString()
        .split("")
        .map((x) => parseInt(x));
    const linkedList = getLinkedList(numArray, true);
    return linkedList;
}
// [2,4,3], l2 = [5,6,4]
const l1 = getLinkedList([2, 4, 3], true);
const l2 = getLinkedList([5, 6, 4], true);
const r2 = addTwoNumbers(l1, l2);
//# sourceMappingURL=2-add-two-numbers.js.map