/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    if(Math.abs(z - x) === Math.abs(z - y)) return 0;
    return Math.abs(z - x) < Math.abs(z - y) ? 1 : 2;
};

let x=2, y=7, z=4;
console.log(findClosest(x,y,z));
