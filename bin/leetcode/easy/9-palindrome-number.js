"use strict";
// https://leetcode.com/problems/palindrome-number/description/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
// Solved - 31 Aug, 2023
// Given an integer x, return true if x is a palindrome and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
const isPalindrome = (x) => {
    return x.toString() === x.toString().split("").reverse().join("");
};
exports.isPalindrome = isPalindrome;
//# sourceMappingURL=9-palindrome-number.js.map