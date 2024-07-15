// https://leetcode.com/problems/add-two-numbers/description/

import { ListNode, getNumber, arrayToListNode } from "../../data-structures/list-node";

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const sum = getNumber(l1) + getNumber(l2);
    const numArray = sum
        .toString()
        .split("")
        .map((x) => parseInt(x));
    const linkedList = arrayToListNode(numArray, true);
    return linkedList;
}

// [2,4,3], l2 = [5,6,4]
const l1 = arrayToListNode([2, 4, 3], true);
const l2 = arrayToListNode([5, 6, 4], true);
const r2 = addTwoNumbers(l1, l2);
