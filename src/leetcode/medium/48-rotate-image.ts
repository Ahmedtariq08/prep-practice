// https://leetcode.com/problems/rotate-image/description/

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// REVIEW - Runtime 43%, memory 16%
function rotate(matrix: number[][]): void {
    const getKey = (row: number, col: number) => `${row}-${col}`;
    const n = matrix.length;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            map.set(getKey(i, j), matrix[i][j]);
            const key = getKey(n - j - 1, i);
            matrix[i][j] = map.get(key) ?? matrix[n - j - 1][i];
        }
    }
}
