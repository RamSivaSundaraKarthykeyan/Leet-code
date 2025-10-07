/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let result = false;
    for (let i=0; i<arr.length; i++){
        if(!arr[i+1] || !arr[i+2]){
            return false;
        }
        if((arr[i]%2) !== 0 && (arr[i+1]%2) !== 0 && (arr[i+2]%2) !== 0){
            return true
        }
        else{
            result = false;
        }
    }
};

let arr = [2,6,4,1];
console.log(threeConsecutiveOdds(arr));
