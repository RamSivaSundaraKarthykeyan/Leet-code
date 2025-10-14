/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;
    if (n < 2*k){return false;}

    const nextInc = new Array(n).fill(0);
    for (let i=n-2; i>=0; --i){
        if(nums[i] < nums[i+1]) nextInc[i] = nextInc[i+1] + 1;
        else nextInc[i] = 0;
    }

    let need = k-1;
    for(let i=0; i+2*k <= n; ++i){
        if(nextInc[i] >= need && nextInc[i+k] >= need) return true;
    }
    return false;
};

let nums = [2,5,7,8,9,2,3,4,3,1];
let k = 3;
console.log(hasIncreasingSubarrays(nums, k));
