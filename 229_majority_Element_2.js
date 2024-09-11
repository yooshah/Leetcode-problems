/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  res = [];
  freq = {};
  n = nums.length;

  for (x of nums) {
    freq[x] = (freq[x] || 0) + 1;
  }
  for (x in freq) {
    if (freq[x] > n / 3) {
      res.push(x);
    }
  }
  return res;
};
