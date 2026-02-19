/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;
    let maxLen = 0;
    
    for (let j = 0; j < nums.length; j++) {
        while (nums[j] > nums[i] * k) {
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1);
    }
    
    return nums.length - maxLen;
};
