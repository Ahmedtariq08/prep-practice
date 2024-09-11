// https://leetcode.com/problems/valid-parentheses/description/

// Solved - 23 August, 2024
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
    const correctStartingBr = { ")": "(", "}": "{", "]": "[" };
    const startingBrackets: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const br = s[i];
        if ("({[".includes(br)) {
            startingBrackets.push(br);
        } else {
            const lastStartingBr = startingBrackets.pop();
            const correctBr = correctStartingBr[br as keyof typeof correctStartingBr];
            if (lastStartingBr != correctBr) {
                return false;
            }
        }
    }
    return startingBrackets.length === 0;
}
