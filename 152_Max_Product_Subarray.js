var maxProduct = function (nums) {
  const n = nums.length;
  let maxP = nums[0];
  for (let i = 0; i < n; i++) {
    maxP = Math.max(nums[i], maxP);
    let curP = nums[i];
    for (let j = i + 1; j < n; j++) {
      curP *= nums[j];
      maxP = Math.max(curP, maxP);
    }
  }
  return maxP;
};
