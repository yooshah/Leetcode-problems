/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let bound = 0;
  let step = 0;

  for (let x of nums) {
    step += x;
    if (step == 0) {
      bound += 1;
    }
  }
  return bound;
};
