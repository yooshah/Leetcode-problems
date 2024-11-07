/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let palinHash = {};
  let maxAlpha = 0;

  for (let x of s) {
    if (palinHash[x] == undefined) {
      palinHash[x] = 1;
      if (1 > maxAlpha) {
        maxAlpha = 1;
      }
    } else {
      palinHash[x] += 1;
      maxAlpha = Math.max(palinHash[x], maxAlpha);
    }
  }
  let res = 0;
  let odd = false;
  const check = 1 % 2;
  console.log(palinHash, check);

  for (let y in palinHash) {
    if (palinHash[y] % 2 != 0) {
      res += palinHash[y] - 1;
      odd = true;
    } else {
      res += palinHash[y];
    }
  }

  if (odd) {
    return res + 1;
  } else {
    return res;
  }
};
