// ANCHOR - Amazon online assessment [Failed] - 30th December 2024

// SECTION => Question 1
// Amazon is establishing a new data center with n servers. Given two integer arrays, health and size, each of length n,
// representing the health and size of the n servers respectively. Each day, only the servers with sizes
// within a specified range [l, r] (both inclusive) are selected for setup.
// For the next q days, you will receive a query each day. Each query provides two integers, l and r,
// defining the inclusive size range of servers selected for setup on that day.
// For each query, find the sum of the health values of the servers within the specified size range l, r (both inclusive).
// Note: The health and the size of the ith (1 ≤ i ≤ n) server are given by health[i] and size[i] respectively,
//  assuming 1-based indexing for both the health and size arrays.

// Example1:
// Given, n = 5 servers, size = [1, 2, 4, 3, 5], health = [3, 4, 1, 2, 5], q= 1 and query = [[1,3]]
// Output = 3 + 4 + 2 = 9

function findHealthSum(size: number[], health: number[], queries: number[][]): number[] {
    // Combine and sort servers by size
    const servers = size.map((s, i) => ({ size: s, health: health[i] }));
    servers.sort((a, b) => a.size - b.size); // Sort by size

    // Precompute prefix sums of health values
    const n = size.length;
    const prefixSum: number[] = new Array(n).fill(0);
    prefixSum[0] = servers[0].health;
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + servers[i].health;
    }

    // Binary search helper functions
    const lowerBound = (arr: { size: number; health: number }[], target: number): number => {
        let low = 0,
            high = arr.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid].size >= target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    };

    const upperBound = (arr: { size: number; health: number }[], target: number): number => {
        let low = 0,
            high = arr.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid].size > target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    };

    // Process each query
    const results: number[] = [];
    for (const [l, r] of queries) {
        const leftIdx = lowerBound(servers, l);
        const rightIdx = upperBound(servers, r) - 1;

        if (leftIdx > rightIdx) {
            // No servers in range
            results.push(0);
        } else {
            // Compute sum using prefixSum
            const sum = prefixSum[rightIdx] - (leftIdx > 0 ? prefixSum[leftIdx - 1] : 0);
            results.push(sum);
        }
    }

    return results;
}

// Example usage
const size = [1, 3, 6, 7, 8, 11, 4, 3];
const health = [3, 6, 5, 8, 2, 1, 9, 6];
const queries = [
    [1, 3],
    [2, 4],
    [3, 7],
];
