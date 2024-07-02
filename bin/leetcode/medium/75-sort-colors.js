"use strict";
// https://leetcode.com/problems/sort-colors/description/?envType=daily-question&envId=2024-06-12
Object.defineProperty(exports, "__esModule", { value: true });
// Solved - 12 June, 2024
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects
// of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
// Runtime beats 93%, memory beat 70%
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let zeroC = 0;
    let oneC = 0;
    let twoC = 0;
    nums.forEach((num, index) => {
        if (num === 0) {
            zeroC++;
        }
        else if (num === 1) {
            oneC++;
        }
        else if (num === 2) {
            twoC++;
        }
    });
    for (let i = 0; i < zeroC; i++) {
        nums.splice(i, 1, 0);
    }
    for (let j = zeroC; j < zeroC + oneC; j++) {
        nums.splice(j, 1, 1);
    }
    for (let k = zeroC + oneC; k < zeroC + oneC + twoC; k++) {
        nums.splice(k, 1, 2);
    }
}
//# sourceMappingURL=75-sort-colors.js.map