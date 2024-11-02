/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  const n = s.length;

  let l = 0;
  let res = 0;
  while (l < n) {
    if (s.slice(l, l + 2) == "IV") {
      res += 4;
      l += 2;
    } else if (s.slice(l, l + 2) == "IX") {
      res += 9;
      l += 2;
    } else if (s.slice(l, l + 2) == "XL") {
      res += 40;
      l += 2;
    } else if (s.slice(l, l + 2) == "XC") {
      res += 90;
      l += 2;
    } else if (s.slice(l, l + 2) == "CD") {
      res += 400;
      l += 2;
    } else if (s.slice(l, l + 2) == "CM") {
      res += 900;
      l += 2;
    } else {
      res += Number(roman[s.charAt(l)]);
      l += 1;
    }
  }
  return res;
};
