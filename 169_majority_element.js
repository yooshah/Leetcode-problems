/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freq = {};
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }
  majority = Math.ceil(n / 2);
  console.log(freq);

  for (key in freq) {
    if (freq[key] >= majority) {
      return key;
    }
  }
};
