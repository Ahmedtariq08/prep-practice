// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/

// FIXME - Time limit exceeds
// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab"
// are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any
// permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s.
// You can return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation:
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

const getPermutations = (arr: string[]): string[][] => {
    if (arr.length === 0) return [[]];

    const result: string[][] = [];
    arr.forEach((element, index) => {
        const remainingElements = [...arr.slice(0, index), ...arr.slice(index + 1)];
        const remainingPermutations = getPermutations(remainingElements);
        remainingPermutations.forEach((permutation) => {
            result.push([element, ...permutation]);
        });
    });

    return result;
};

const findAllSubstringIndexes = (str: string, subStr: string) => {
    const indexes: number[] = [];
    let i = str.indexOf(subStr);
    while (i !== -1) {
        indexes.push(i);
        i = str.indexOf(subStr, i + 1);
    }
    return indexes;
};

function findSubstring(s: string, words: string[]): number[] {
    const permutations = getPermutations(words);
    const indexes: number[] = [];
    permutations.forEach((perm) => {
        const allIndexes = findAllSubstringIndexes(s, perm.join(""));
        indexes.push(...allIndexes);
    });
    return Array.from(new Set(indexes));
}

export const solution = () => {
    const s = "foobarfoobar";
    const words = ["foo", "bar"];
    const res = findSubstring(s, words);
    console.log(res);
};

solution();
