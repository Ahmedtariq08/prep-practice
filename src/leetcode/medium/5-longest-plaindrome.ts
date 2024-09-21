// https://leetcode.com/problems/longest-palindromic-substring/description/

// Not solved - 20 Sep, 2024

function longestPalindrome(s: string): string {
    const isPalindrome = (str: string) => {
        return str === str.split("").reverse().join("");
    };

    let li = 0;
    let ri = s.length;

    // right converging to left
    while (ri > 1) {
        const sub = s.slice(li, ri);
        const validP = isPalindrome(sub);
        console.log(sub);
        if (validP) {
            return sub;
        }
        ri--;
    }

    // left converge to right
    while (li < s.length - 1) {
        const sub = s.slice(li, s.length);
        const validP = isPalindrome(sub);
        console.log(sub);
        if (validP) {
            return sub;
        }
        li++;
    }

    return s[0];
}

console.clear();
const str = "cbbd";
const res_lp = longestPalindrome(str);
console.log(res_lp);
