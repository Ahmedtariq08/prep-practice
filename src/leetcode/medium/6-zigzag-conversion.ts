// https://leetcode.com/problems/zigzag-conversion/description/

// Solved - 10 June, 2024

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Input: s = "PAYPALISHIRING", numRows = 5
// Output: "PINALSIGYAHRPI"
// Explanation:
// P      H
// A    S I
// Y   I  R
// P L    I  G
// A      N

export const convert = (s: string, numRows: number): string => {
    let arrs: string[] = [];
    let count = 0;
    let dir = 1; // 1 for positive, 0 for negative
    for (let i = 0; i < s.length; i++) {
        if (count === numRows - 1) {
            dir = 0;
        }
        if (count === 0) {
            dir = 1;
        }
        arrs[count] = arrs[count] == null ? s[i] : `${arrs[count]}${s[i]}`;
        count = dir === 1 ? count + 1 : count - 1;
    }
    return arrs.reduce((acc, str) => {
        return (acc += str);
    }, "");
};
