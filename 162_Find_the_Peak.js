var findPeakElement = function (nums) {
  const n = nums.length;

  if (n == 1) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
  if (nums[0] > nums[1]) {
    return 0;
  } else {
    return n - 1;
  }
};
