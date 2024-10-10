/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  const n = strs[0].length;

  for (let i = 0; i < n; i++) {
    const ch = strs[0].charAt(i);
    for (x of strs) {
      if (x.charAt(i) !== ch || i == x.length) {
        return res;
      }
    }
    res += ch;
  }

  return res;
};
