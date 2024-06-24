// https://leetcode.com/problems/majority-element/description/

// Solved - 19 June, 2024

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Runtime beats 98%, memory beats 33%
const majorityElement = (nums: number[]): number => {
    const midpoint = Math.floor(nums.length / 2);
    const countMap = new Map();
    for (const num of nums) {
        const updatedVal = (countMap.get(num) ?? 0) + 1;
        if (updatedVal > midpoint) {
            return num;
        }
        countMap.set(num, updatedVal);
    }

    let max = { val: 0, num: undefined };
    for (const [key, value] of countMap) {
        if (value > max.val) {
            max = { val: value, num: key };
        }
    }
    return max.num ?? 0;
};

console.clear();
const nums = [3, 2, 3];
const res = majorityElement(nums);
console.log(res);
