/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;
    let area = 0;

    while (i<j){
        width = j - i;
        area = (Math.min(height[i], height[j])) * width;

        maxArea = Math.max(maxArea, area);

        if (height[i] < height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxArea;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
