var minDays = function (bloomDay, m, k) {
  const n = bloomDay.length;
  if (m * k > n) {
    return -1;
  }

  function dayToMake(arr, minDay) {
    let flower = 0;
    let bouquets = 0;

    for (let x of arr) {
      if (x <= minDay) {
        flower += 1;
      } else {
        flower = 0;
      }
      if (flower == k) {
        bouquets += 1;
        flower = 0;
      }
    }
    return bouquets;
  }
  let l = 1;
  let r = Math.max(...bloomDay);

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const bouquets = dayToMake(bloomDay, mid);
    console.log(mid, "**", bouquets);

    if (bouquets < m) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
