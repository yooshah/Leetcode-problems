/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        res.push([i, j]);
      }
    }
  }
  res1 = res.filter((val, ind) => ind == res.indexOf(val));

  for (x of res1) {
    [x, y] = x;
    for (let i = 0; i < m; i++) {
      matrix[i][y] = 0;
    }
    for (let j = 0; j < n; j++) {
      matrix[x][j] = 0;
    }
  }
  return matrix;
};
