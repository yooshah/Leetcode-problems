/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let cnt = 0;
  let maxNum = 0;

  for (let x of s) {
    if (x == "(") {
      cnt += 1;
      maxNum = Math.max(maxNum, cnt);
    } else if (x == ")") {
      cnt -= 1;
    }
  }
  return maxNum;
};
