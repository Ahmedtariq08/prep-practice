// https://leetcode.com/problems/jump-game-ii/description/

// NEED TO LOOK INTO THIS

// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i.
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1].
// The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// REVIEW
function jump(nums: number[]): number {
    const n = nums.length;
    let currentPos = 0;
    let jumpCount = 0;

    while (currentPos < n - 1) {
        const maxJump = nums[currentPos];
        const remainingElements = n - currentPos - 1;
        if (maxJump >= remainingElements) {
            return ++jumpCount;
        }

        let nextPos = -100;
        let nextIndex = 0;
        for (let i = currentPos + 1; i <= currentPos + maxJump; i++) {
            if (nums[i] >= nextPos) {
                nextPos = nums[i];
                nextIndex = i;
            }
        }
        currentPos = nextIndex;
        jumpCount++;
    }
    return jumpCount;

    // Algorithm when we choose the max jump in next turn everytime
    const algo1 = () => {
        let currentPos = 0;
        let jumpCount = 0;

        while (currentPos < n - 1) {
            const maxJump = nums[currentPos];
            const remainingElements = n - currentPos - 1;
            if (maxJump >= remainingElements) {
                return ++jumpCount;
            }

            let nextPos = -100;
            let nextIndex = 0;
            for (let i = currentPos + 1; i <= currentPos + maxJump; i++) {
                if (nums[i] >= nextPos) {
                    nextPos = nums[i];
                    nextIndex = i;
                }
            }
            currentPos = nextIndex;
            jumpCount++;
        }
        return jumpCount;
    };

    // Algorithm when we make the highest jump whenever given opportunity
    const algo2 = () => {
        let currentPos = 0;
        let jumpCount = 0;

        while (currentPos < n - 1) {
            const maxJump = nums[currentPos];
            const remainingElements = n - currentPos - 1;
            if (maxJump >= remainingElements) {
                return ++jumpCount;
            }
            currentPos += maxJump;
            jumpCount++;
        }
        return jumpCount;
    };

    return Math.min(algo1(), algo2());
}

console.clear();
const nums_jump = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0];
const res_jump = jump(nums_jump);
console.log(res_jump);
