// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

import { ListNode, listNodeToArray, arrayToListNode } from "../../data-structures/list-node";

// Solved 22 August, 2024

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const arr = listNodeToArray(head);
    const countMap = new Map<number, number>();
    arr.forEach((num: number) => {
        const updatedValue = (countMap.get(num) ?? 0) + 1;
        countMap.set(num, updatedValue);
    });

    const output = [];
    for (const [key, value] of countMap.entries()) {
        if (value == 1) {
            output.push(key);
        }
    }
    output.sort((a, b) => a - b);
    return arrayToListNode(output, false);
}
