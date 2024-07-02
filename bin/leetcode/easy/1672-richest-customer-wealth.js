"use strict";
// https://leetcode.com/problems/richest-customer-wealth/description/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumWealth = maximumWealth;
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.
function maximumWealth(accounts) {
    let maxSum = 0;
    accounts.forEach((banks) => {
        const wealth = banks.reduce((acc, curr) => {
            return (acc += curr);
        }, 0);
        maxSum = Math.max(maxSum, wealth);
    });
    return maxSum;
}
//# sourceMappingURL=1672-richest-customer-wealth.js.map