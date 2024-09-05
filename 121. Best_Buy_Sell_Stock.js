//solution -> using two pointers
// find diff of arr[r]-arr[l] and store max in each diff
// if arr[l]>arr[r]--set l=r
//r++ each times

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  maxprofit = 0;
  totalSum = 0;
  n = prices.length;
  l = 0;
  r = 1;
  while (r < n) {
    totalsum = prices[r] - prices[l];
    maxprofit = Math.max(totalsum, maxprofit);

    if (prices[r] < prices[l]) {
      l = r;
    }
    r += 1;
  }
  return maxprofit;
};
