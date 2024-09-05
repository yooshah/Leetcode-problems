/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // solution -using kadane algorithm
  // initialize sum=0 and maxi(any variable)=nums[0]
  // iterate through array
  let maxSum = 0;
  let maxi = nums[0];

  for (let i = 0; i < nums.length; i++) {
    maxSum += nums[i];
    maxi = Math.max(maxSum, maxi);
    if (maxSum <= 0) {
      maxSum = 0;
    }
  }
  return maxi;
};
