var splitArray = function (nums, k) {
  const minSum = Math.max(...nums);

  const maxSum = nums.reduce((acc, val) => acc + val);

  function splitSum(arr, ssumm) {
    let split = 1;
    let splitArrSum = 0;

    for (let x of arr) {
      if (splitArrSum + x <= ssumm) {
        splitArrSum += x;
      } else {
        splitArrSum = x;
        split += 1;
      }
    }
    return split;
  }

  let l = minSum;
  let r = maxSum;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const split = splitSum(nums, mid);

    if (split > k) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
