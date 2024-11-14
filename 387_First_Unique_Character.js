/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};
