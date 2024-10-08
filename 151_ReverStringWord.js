/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const sArr = s.split(" ");

  const n = sArr.length;
  let res = "";
  console.log(sArr);
  for (let i = n - 1; i >= 0; i--) {
    if (sArr[i] == "") {
      continue;
    }
    res += sArr[i].trim();
    res += " ";
  }

  return res.trim();
};
