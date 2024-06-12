// https://leetcode.com/problems/longest-common-prefix/description/

// Solved - 31 Aug, 2023

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs: string[]): string {
    const firstString = strs[0];
    const arr = strs.slice(1);
    let outputStr = "";

    for (const s of firstString) {
        if (arr.every((value) => value.startsWith(outputStr.concat(s)))) {
            outputStr = outputStr.concat(s);
        } else {
            return outputStr;
        }
    }
    return outputStr;
}
