import { describe, test, expect } from "@jest/globals";
import { twoSum } from "../easy/1-two-sum";
import { isPalindrome } from "../easy/9-palindrome-number";
import { romanToInt } from "../easy/13-roman-to-integer";
import { longestCommonPrefix } from "../easy/14-longest-common-prefix";

describe("Two Sum", () => {
    test("Ex 1", () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });
    test("Ex 2", () => {
        const result = twoSum([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });
    test("Ex 3", () => {
        const result = twoSum([3, 3], 6);
        expect(result).toEqual([0, 1]);
    });
});

describe("Palindrome", () => {
    test("121 = true", () => {
        const result = isPalindrome(121);
        expect(result).toBe(true);
    });
    test("143 = false", () => {
        const result = isPalindrome(143);
        expect(result).toBe(false);
    });
});

describe("Roman to Integer", () => {
    test("III", () => {
        const result = romanToInt("III");
        expect(result).toEqual(3);
    });
    test("IX", () => {
        const result = romanToInt("IX");
        expect(result).toEqual(9);
    });
});

describe("Longest common prefix", () => {
    test("Ex 1", () => {
        const result = longestCommonPrefix(["flower", "flow", "flight"]);
        expect(result).toEqual("fl");
    });
    test("Ex 2", () => {
        const result = longestCommonPrefix(["dog", "racecar", "car"]);
        expect(result).toEqual("");
    });
});
