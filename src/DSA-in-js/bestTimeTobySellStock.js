// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

function maxPrices(prices) {
  let minStockPurchasePrice = prices[0] || 0,
    profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) minStockPurchasePrice = prices[i];
    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }
  return profit;
}

maxPrices([7, 1, 5, 3, 6, 4]);
