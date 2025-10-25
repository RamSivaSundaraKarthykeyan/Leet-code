/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let start = 1, total = 0;
    while (n > 0) {
        for (let day = start; day < start + 7 && n > 0; ++day) {
            total += day;
            n--;
        }
        start++;
    }
    return total;
}
const n = 4;
console.log(totalMoney(n))
