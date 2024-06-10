// https://leetcode.com/problems/single-number/description/

// Solved - 29 May, 2024

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

function singleNumber(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0);
}
