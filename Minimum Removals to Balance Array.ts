function minRemoval(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let i: number = 0;
    let maxLen: number = 0;
    
    for (let j:number = 0; j < nums.length; j++) {
        while (nums[j] > nums[i] * k) {
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1);
    }
    
    return nums.length - maxLen;
};
