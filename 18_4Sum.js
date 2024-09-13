//optimal solution using two for loop and two pointer

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let n = nums.length;
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (j != i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      l = j + 1;
      r = n - 1;
      while (l < r) {
        curSum = nums[i] + nums[j] + nums[l] + nums[r];

        if (curSum > target) {
          r -= 1;
        } else if (curSum < target) {
          l += 1;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l += 1;
          while (nums[l - 1] == nums[l] && l < r) {
            l += 1;
          }
        }
      }
    }
  }
  return res;
};

// // Brute force

// var fourSum = function (nums, target) {
//   let res = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         for (let p = k + 1; p < nums.length; p++) {
//           if (nums[i] + nums[j] + nums[k] + nums[p] == target) {
//             res.push(
//               [nums[i], nums[j], nums[k], nums[p]].sort((a, b) => a - b)
//             );
//           }
//         }
//       }
//     }
//   }
//   let uniqueArr = [...new Set(res.map(JSON.stringify))].map(JSON.parse);
//   return uniqueArr;
// };
