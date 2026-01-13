/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const map = new Map();
    let n = nums.length;
    let target = n/2;
    for(let i=0; i<n; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }
        else{
            map.set(nums[i], 1);
        }
    }
    for(let [key, value] of map){
        if(value === target){
            return key;
        }
    }
};
