/**
 * @param {number[]} nums
 * @return {number}
 */
const countValidSelections = nums => {
    const n = nums.length;
    let res = 0;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] + nums[i - 1];
        right[n - i - 1] = right[n - i] + nums[n - i];
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) continue;
        if (left[i] === right[i]) res += 2;
        else if (Math.abs(left[i] - right[i]) === 1) res += 1;
    }

    return res;
};
