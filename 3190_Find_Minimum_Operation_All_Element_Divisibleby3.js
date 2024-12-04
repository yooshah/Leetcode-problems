/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let res = 0;
  for (let x of nums) {
    if (x % 3 != 0) {
      res += 1;
    }
  }
  return res;
};
