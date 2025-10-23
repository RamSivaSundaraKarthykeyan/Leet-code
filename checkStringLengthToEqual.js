/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while (s.length !== 2){
        let temp = [];
        for(let i = 1; i<s.length; i++){
            let sum = (parseInt(s[i - 1]) + parseInt(s[i])) % 10;
            temp.push(sum.toString());
        }
        s = temp.join('');
    }
    return s[0] === s[1];
};

let s = "3902";
console.log(hasSameDigits)
