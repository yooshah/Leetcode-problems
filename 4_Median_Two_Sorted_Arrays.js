/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let res = nums1.concat(nums2);

  res.sort((a, b) => a - b);

  const n = res.length;
  console.log(n % 2 != 0);

  if (n % 2 != 0) {
    const median = Math.floor(n / 2);

    return res[median];
  } else {
    return (res[n / 2 - 1] + res[n / 2]) / 2;
  }
};
