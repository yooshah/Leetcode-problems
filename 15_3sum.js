var threeSum = function (nums) {
  let newnums = nums.map((val) => val);
  let res = [];
  newnums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (newnums[i] == newnums[i - 1] && i > 0) {
      continue;
    }
    l = i + 1;
    r = nums.length - 1;

    while (l < r) {
      let cursum = newnums[i] + newnums[l] + newnums[r];

      if (cursum > 0) {
        r -= 1;
      } else if (cursum < 0) {
        l += 1;
      } else {
        res.push([newnums[i], newnums[l], newnums[r]]);
        l += 1;

        while (newnums[l] == newnums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  return res;
};
