/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    let n = nums.length, i=0, res=0, prev = 0;
    while(i<n){
        let start = i;
        while(i+1<n && nums[i] < nums[i+1]){
            i++;
        }
        let curr = i - start + 1;
        res = Math.max(res, Math.max(curr >> 1, Math.min(curr, prev)));

        prev = curr;
        i++;
    }
    return res;
};
