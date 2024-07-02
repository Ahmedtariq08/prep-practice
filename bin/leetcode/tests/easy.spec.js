"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1_two_sum_1 = require("../easy/1-two-sum");
const _9_palindrome_number_1 = require("../easy/9-palindrome-number");
const _13_roman_to_integer_1 = require("../easy/13-roman-to-integer");
const _14_longest_common_prefix_1 = require("../easy/14-longest-common-prefix");
const _1672_richest_customer_wealth_1 = require("../easy/1672-richest-customer-wealth");
(0, globals_1.describe)("Two Sum", () => {
    (0, globals_1.test)("Ex 1", () => {
        const result = (0, _1_two_sum_1.twoSum)([2, 7, 11, 15], 9);
        (0, globals_1.expect)(result).toEqual([0, 1]);
    });
    (0, globals_1.test)("Ex 2", () => {
        const result = (0, _1_two_sum_1.twoSum)([3, 2, 4], 6);
        (0, globals_1.expect)(result).toEqual([1, 2]);
    });
    (0, globals_1.test)("Ex 3", () => {
        const result = (0, _1_two_sum_1.twoSum)([3, 3], 6);
        (0, globals_1.expect)(result).toEqual([0, 1]);
    });
});
(0, globals_1.describe)("Palindrome", () => {
    (0, globals_1.test)("121 = true", () => {
        const result = (0, _9_palindrome_number_1.isPalindrome)(121);
        (0, globals_1.expect)(result).toBe(true);
    });
    (0, globals_1.test)("143 = false", () => {
        const result = (0, _9_palindrome_number_1.isPalindrome)(143);
        (0, globals_1.expect)(result).toBe(false);
    });
});
(0, globals_1.describe)("Roman to Integer", () => {
    (0, globals_1.test)("III", () => {
        const result = (0, _13_roman_to_integer_1.romanToInt)("III");
        (0, globals_1.expect)(result).toEqual(3);
    });
    (0, globals_1.test)("IX", () => {
        const result = (0, _13_roman_to_integer_1.romanToInt)("IX");
        (0, globals_1.expect)(result).toEqual(9);
    });
});
(0, globals_1.describe)("Longest common prefix", () => {
    (0, globals_1.test)("Ex 1", () => {
        const result = (0, _14_longest_common_prefix_1.longestCommonPrefix)(["flower", "flow", "flight"]);
        (0, globals_1.expect)(result).toEqual("fl");
    });
    (0, globals_1.test)("Ex 2", () => {
        const result = (0, _14_longest_common_prefix_1.longestCommonPrefix)(["dog", "racecar", "car"]);
        (0, globals_1.expect)(result).toEqual("");
    });
});
(0, globals_1.describe)("Richest Customer Wealth", () => {
    (0, globals_1.test)("Ex 1", () => {
        const result = (0, _1672_richest_customer_wealth_1.maximumWealth)([
            [1, 2, 3],
            [3, 2, 1],
        ]);
        (0, globals_1.expect)(result).toEqual(6);
    });
    (0, globals_1.test)("Ex 2", () => {
        const result = (0, _1672_richest_customer_wealth_1.maximumWealth)([
            [1, 5],
            [7, 3],
            [3, 5],
        ]);
        (0, globals_1.expect)(result).toEqual(10);
    });
});
//# sourceMappingURL=easy.spec.js.map