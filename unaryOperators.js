/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    const op = new Map([["X++",1], ["++X", 1], ["X--",-1], ["--X", -1]]);
    for (const o of operations){
            x = x + op.get(o);
    }

    return x;
};

let operations = ["--X","X++","X++"];
console.log(finalValueAfterOperations(operations))
