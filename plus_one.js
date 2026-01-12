/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let temp = BigInt(digits.join(''));
    temp++;
    let temp1 = (temp).toString().split('').map(Number);
    return temp1;
};
