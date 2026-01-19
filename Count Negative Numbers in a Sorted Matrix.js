/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const flat = grid.flat();
    let n = 0;
    flat.forEach((e) => {
        if(e < 0){
            n++;
        }
    })
    return n;
};
