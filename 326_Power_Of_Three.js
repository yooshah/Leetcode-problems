/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let nCopy = n;

  if (n <= 0) {
    return false;
  }
  while (nCopy >= 1) {
    if (nCopy == 1) {
      return true;
    }
    if (nCopy % 3 !== 0) {
      return false;
    } else {
      nCopy = nCopy / 3;
    }
  }
};
