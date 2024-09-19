var searchInsert = function (nums, target) {
  const n = nums.length;

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      r = mid - 1;
    } else {
      if (nums[l] < target && nums[r] > target && r - l == 1) {
        return r;
      }
    }
  }

  return l;
};
