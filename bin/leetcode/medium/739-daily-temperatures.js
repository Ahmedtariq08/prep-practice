"use strict";
// https://leetcode.com/problems/daily-temperatures/description/
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyTemperatures = dailyTemperatures;
// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait after
// the ith day to get a warmer temperature. If there is no future day for which this is possible,
// keep answer[i] == 0 instead.
// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
function dailyTemperatures(temperatures) {
    const stack = [];
    const ans = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];
        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop();
            ans[j] = i - j;
        }
        stack.push(i);
    }
    return ans;
}
//# sourceMappingURL=739-daily-temperatures.js.map