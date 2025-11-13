/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0;
    for(let i = 1; i<prices.length; i++){
        if(prices[i] < buy){
            buy = prices[i];
        }
        profit = Math.max(profit, prices[i] - buy)
    }
    return profit;
};



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Number.POSITIVE_INFINITY;
    let sell = 0;
    const n = prices.length;
    const profit = [];
    let temp;
    if(n===0 || n===1){
        return 0;
    }
    for(let i = 0; i<n; i++){
        if(prices[i]<buy){
            buy = prices[i];
            for(let j=i; j<n; j++){
                if(prices[j]>sell){
                    sell = prices[j];
                }
            }
            temp = sell - buy;
            profit.push(temp);
            sell = 0;
        }
    }
    let res = Math.max(...profit);
    return res;
};
