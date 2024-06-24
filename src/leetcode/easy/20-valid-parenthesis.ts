// https://leetcode.com/problems/valid-parentheses/description/

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
    const bracketMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
    ]);

    let closingBrackets = [];
    for (let char of s) {
        if ("({[".includes(char)) {
            closingBrackets.push(bracketMap.get(char)!);
        } else if (")}]".includes(char)) {
            const correctClosingBracket = closingBrackets.pop();
            if (correctClosingBracket !== char) {
                console.log(char, correctClosingBracket);
                return false;
            }
        }
    }
    return closingBrackets.length === 0;
}
