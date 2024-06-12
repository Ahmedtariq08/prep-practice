// https://leetcode.com/problems/search-insert-position/description/

// Solved - 31 July, 2023

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

function searchInsert(nums: number[], target: number): number {
    let index = nums.findIndex((value) => value == target);
    if (index == -1) {
        index = nums.filter((value) => value < target).length;
    }
    return index;
}
