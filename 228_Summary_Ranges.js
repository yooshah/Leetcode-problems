/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let l = 0;
  let r = 0;
  const n = nums.length;
  let res = [];

  while (r < n) {
    if (nums[r] == nums[r + 1] - 1) {
      r++;
    } else {
      if (l != r) {
        res.push(`${nums[l]}->${nums[r]}`);
      } else {
        res.push(String(nums[l]));
      }
      r += 1;
      l = r;
    }
  }
  return res;
};
