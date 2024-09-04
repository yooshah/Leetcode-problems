/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  /* Optimal solution */
  low = 0;
  mid = 0;
  high = nums.length - 1;

  function swap(ind1, ind2, arr) {
    temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
  }
  while (mid <= high) {
    if (nums[mid] == 0) {
      swap(mid, low, nums);
      mid += 1;
      low += 1;
    } else if (nums[mid] == 1) {
      mid += 1;
    } else {
      swap(mid, high, nums);
      high -= 1;
    }
  }
  return nums;
};
