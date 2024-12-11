/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let y of words[i]) {
      if (y == x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};
