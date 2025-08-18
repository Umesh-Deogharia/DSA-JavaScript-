/*
Best Time to Buy and Sell Stock
Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Given an array prices where prices[i] is the price of a given stock on the ith day,
find the maximum profit you can achieve from one transaction (buy and sell one share).
*/
    
let arr = [7, 1, 5, 3, 6, 4]
var maxProfit = function (prices) {
    let min = prices[0], profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
        else if (prices[i] < min) {
            min = prices[i];
        }
    }
    return profit;
};

console.log(maxProfit(arr));