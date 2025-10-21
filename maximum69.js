/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let res = num.toString();
    res = Number(res.replace("6", "9"));
    return res;
};

let num = 9669;
console.log(maximum69Number(num))
