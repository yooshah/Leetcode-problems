/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // let minNum=nums[0]
  // for(x of nums){
  //     minNum=Math.min(x,minNum)
  // }
  // return minNum

  const n = nums.length;
  let l = 0;
  let r = n - 1;

  let minNum = nums[0];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[l] <= nums[mid]) {
      minNum = Math.min(nums[l], minNum);
      l = mid + 1;
    } else {
      minNum = Math.min(nums[mid], minNum);
      r = mid - 1;
    }
  }
  return minNum;
};
