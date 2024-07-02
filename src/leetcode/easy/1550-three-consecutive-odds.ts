// https://leetcode.com/problems/three-consecutive-odds/description/?envType=daily-question&envId=2024-07-01

// Solved - 1 July, 2024

// Given an integer array arr, return true if there are three consecutive odd numbers in the array.
// Otherwise, return false.

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// Runtime 97%, memory 100%
function threeConsecutiveOdds(arr: number[]): boolean {
    const isEven = (num: number) => num % 2 == 0;
    let i = 0;

    while (i < arr.length - 2) {
        if (isEven(arr[i + 2])) {
            i += 3;
            continue;
        } else if (isEven(arr[i + 1])) {
            i += 2;
            continue;
        } else if (isEven(arr[i])) {
            i++;
            continue;
        } else {
            return true;
        }
    }
    return false;
}
