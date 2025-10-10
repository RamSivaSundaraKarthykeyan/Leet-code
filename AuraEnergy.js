/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    let n = energy.length;
    let dp = Array(n).fill(0);
    let maxAura = Number.NEGATIVE_INFINITY;
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = energy[i] + (i + k < n ? dp[i + k] : 0);
        if (dp[i] > maxAura) {
            maxAura = dp[i];
        }
    }
    return maxAura;
};

let energy = [-2,-3,-1];
let k = 2;
console.log(maximumEnergy(energy, k));
