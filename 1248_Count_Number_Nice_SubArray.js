/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let ans1 = NiceArrayFinder(nums, k - 1);
  let ans2 = NiceArrayFinder(nums, k);

  return ans2 - ans1;
};

function NiceArrayFinder(nums, t) {
  let r = 0;
  let l = 0;

  const n = nums.length;

  let res = 0;
  let oddCount = 0;

  while (r < n) {
    if (t < 0) {
      return 0;
    }

    oddCount += nums[r] % 2;

    while (oddCount > t) {
      oddCount -= nums[l] % 2;
      l++;
    }
    res += r - l + 1;

    r++;
  }
  return res;
}
