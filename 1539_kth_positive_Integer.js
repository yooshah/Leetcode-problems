/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (i == 0 && arr[0] !== 1) {
      for (let p = 1; p < arr[0]; p++) {
        res.push(p);
      }
    } else {
      if (arr[i] - arr[i - 1] > 1) {
        for (let p = arr[i - 1] + 1; p < arr[i]; p++) {
          res.push(p);
        }
      }
    }
    if (res.length >= k) {
      return res[k - 1];
    }
  }

  return arr[n - 1] + k - (arr[n - 1] - n);
};
