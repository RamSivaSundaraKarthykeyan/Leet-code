/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    // Step 1: Count frequency of each damage value
    const freq = power.reduce((map, x) => {
        map.set(x, (map.get(x) || 0) + 1);
        return map;
    }, new Map());

    // Step 2: Extract and sort unique damage values
    const vals = Array.from(freq.keys()).sort((a, b) => a - b);

    // Step 3: Compute total damage per unique value
    const totals = vals.map(x => x * freq.get(x));

    const n = vals.length;
    if (n === 0) return 0;
    if (n === 1) return totals[0];

    // Step 4: DP array
    const dp = new Array(n).fill(0);
    dp[0] = totals[0];

    // Helper: binary search for last index j where vals[j] < target
    function findLastSafe(i, target) {
        let lo = 0, hi = i - 1, res = -1;
        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (vals[mid] < target) {
                res = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return res;
    }

    // Step 5: Fill DP
    for (let i = 1; i < n; i++) {
        const skip = dp[i - 1];
        const takeIndex = findLastSafe(i, vals[i] - 2);
        const take = totals[i] + (takeIndex >= 0 ? dp[takeIndex] : 0);
        dp[i] = Math.max(skip, take);
    }

    // Step 6: Return result
    return dp[n - 1];
};

let power = [1,1,3,4];
console.log(maximumTotalDamage(power));
