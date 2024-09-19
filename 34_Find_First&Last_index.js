var searchRange = function (nums, target) {
  function binarySearch(arr) {
    const n = arr.length;
    let l = 0;
    let r = n - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return -1;
  }

  const ans = binarySearch(nums);
  console.log(ans);
  if (ans == -1) {
    return [-1, -1];
  } else {
    let pre = ans;
    let suf = ans;
    while (pre > 0 && nums[pre - 1] === target) {
      pre--;
    }

    while (suf < nums.length - 1 && nums[suf + 1] === target) {
      suf++;
    }
    return [pre, suf];
  }
};

if (nums.indexOf(target) == -1) {
  return [-1, -1];
} else {
  const firstind = nums.indexOf(target);
  const lastind = nums.lastIndexOf(target);
  return [firstind, lastind];
}
