"use strict";
// https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/description/
Object.defineProperty(exports, "__esModule", { value: true });
exports.occurrencesOfElement = void 0;
// Solved - 26 June, 2024
// You are given an integer array nums, an integer array queries, and an integer x.
// For each queries[i], you need to find the index of the queries[i]th occurrence of x in the nums array.
// If there are fewer than queries[i] occurrences of x, the answer should be -1 for that query.
// Return an integer array answer containing the answers to all queries.
// Input: nums = [1,3,1,7], queries = [1,3,2,4], x = 1
// Output: [0,-1,2,-1]
const occurrencesOfElement = (nums, queries, x) => {
    const occurences = nums.map((num, index) => (num == x ? index : -1)).filter((val) => val != -1);
    return queries.map((query) => {
        return occurences[query - 1] ?? -1;
    });
};
exports.occurrencesOfElement = occurrencesOfElement;
//# sourceMappingURL=3159-occurences-of-element.js.map