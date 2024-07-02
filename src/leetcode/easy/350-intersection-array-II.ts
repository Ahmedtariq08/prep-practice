// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/?envType=daily-question&envId=2024-07-02

// Solved 2 July, 2024

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Runtime 78%, Memory 35%
export const intersect = (nums1: number[], nums2: number[]): number[] => {
    const getCountMap = (numArr: number[]) => {
        const map = new Map();
        numArr.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));
        return map;
    };

    const countMap1 = getCountMap(nums1);
    const countMap2 = getCountMap(nums2);
    const output: number[] = [];

    for (const [key, value] of countMap1) {
        if (countMap2.has(key)) {
            const arr = Array(Math.min(value, countMap2.get(key))).fill(key);
            output.push(...arr);
        }
    }
    return output;
};
