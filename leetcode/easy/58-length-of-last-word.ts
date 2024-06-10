// https://leetcode.com/problems/length-of-last-word/description/

// Solved - 08 May, 2024

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

function lengthOfLastWord(s: string): number {
    const trimmed = s.trim().split(" ");
    return trimmed[trimmed.length - 1].length;
}
