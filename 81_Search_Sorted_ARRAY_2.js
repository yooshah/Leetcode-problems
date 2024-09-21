var search = function (nums, target) {
  const n = nums.length;

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] == target) {
      return true;
    } else if (nums[l] == nums[mid] && nums[r] == nums[mid]) {
      // note this
      l += 1;
      r -= 1;
    } else if (nums[l] <= nums[mid]) {
      if (nums[mid] >= target && nums[l] <= target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] <= target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false;
};
