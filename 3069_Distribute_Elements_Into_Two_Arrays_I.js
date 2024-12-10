/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const n = nums.length;

  let res1 = [];
  let res2 = [];
  res1.push(nums[0]);
  res2.push(nums[1]);

  for (let i = 2; i < n; i++) {
    if (res1[res1.length - 1] > res2[res2.length - 1]) {
      res1.push(nums[i]);
    } else {
      res2.push(nums[i]);
    }
  }
  return res1.concat(res2);
};
