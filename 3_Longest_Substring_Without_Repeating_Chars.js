/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let sCount = 0;
  if (s.length > 0) {
    sCount = 1;
  }
  for (let i = 0; i < s.length; i++) {
    let subCount = 1;
    for (let j = i + 1; j < s.length; j++) {
      let subS = s.slice(i, j + 1);

      if (subS.indexOf(s[j]) == subS.lastIndexOf(s[j])) {
        subCount += 1;
        sCount = Math.max(sCount, subCount);
      } else {
        break;
      }
    }
  }

  return sCount;
};
