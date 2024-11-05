/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  let resLen = 0;

  const n = s.length;
  for (let i = 0; i < n; i++) {
    // for odd palindrome
    let l = i;
    let r = i;

    while (l >= 0 && r < n && s[l] == s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
    // for even palindrome
    l = i;
    r = i + 1;

    while (l >= 0 && r < n && s[l] == s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
  }

  return res;
};
