var singleNonDuplicate = function (nums) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] != nums[mid - 1] && nums[mid + 1] != nums[mid]) {
      return nums[mid];
    } else if (mid % 2 == 0) {
      if (nums[mid] == nums[mid - 1]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] == nums[mid - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return nums[mid];
};
