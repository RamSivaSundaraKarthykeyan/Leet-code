/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let res = "";

    for (const [value, sym] of values){
        if(num >= value){
            const count = Math.floor(num/value);
            res += sym.repeat(count);
            num -= count * value;
        }
    }
    return res;
    
};

let num = 3749;
console.log(intToRoman(num))
