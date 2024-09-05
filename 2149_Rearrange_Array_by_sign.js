var rearrangeArray = function (nums) {
  const res = new Array(nums.length);
  console.log(res);
  n = nums.length;
  posind = 0;
  negind = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      res[negind] = nums[i];
      negind += 2;
    } else {
      res[posind] = nums[i];
      posind += 2;
    }
  }
  console.log(res);
  return res;
};
