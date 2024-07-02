"use strict";
// https://leetcode.com/problems/relative-sort-array/description/?envType=daily-question&envId=2024-06-11
Object.defineProperty(exports, "__esModule", { value: true });
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
// Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:
// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]
// 57ms, 52mb
const relativeSortArray = (arr1, arr2) => {
    const indexMap = new Map();
    arr2.forEach((num, i) => indexMap.set(num, i));
    let outputArrs = [];
    const notFoundNumbers = [];
    arr1.forEach((num) => {
        const index = indexMap.get(num);
        if (index == null) {
            notFoundNumbers.push(num);
        }
        else {
            if (Array.isArray(outputArrs[index])) {
                outputArrs[index].push(num);
            }
            else {
                outputArrs[index] = [num];
            }
        }
    });
    notFoundNumbers.sort((a, b) => a - b);
    const output = [...outputArrs.flat(), ...notFoundNumbers];
    return output;
};
// 58ms, 51mb
const relativeSortArray2 = (arr1, arr2) => {
    const output = [];
    const notFoundNumbers = arr1.filter((num) => !arr2.includes(num)).sort((a, b) => a - b);
    arr2.forEach((num) => {
        const count = arr1.filter((n) => n == num).length;
        const arr = new Array(count).fill(num);
        output.push(...arr);
    });
    const result = [...output, ...notFoundNumbers];
    return result;
};
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
// [2,2,2,1,4,3,3,9,6,7,19]
const res_relative_sort = relativeSortArray(arr1, arr2);
console.log(res_relative_sort);
//# sourceMappingURL=1122-relative-sort-array.js.map