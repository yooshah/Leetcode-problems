/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  n = matrix.length;
  // swap function
  function swap(ind1, ind2, matrix) {
    temp = matrix[ind1][ind2];
    matrix[ind1][ind2] = matrix[ind2][ind1];
    matrix[ind2][ind1] = temp;
  }

  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swap(i, j, matrix);
    }
  }
  //reverse the row of the transpose matrix
  console.log(matrix);
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
};
