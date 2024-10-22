function findPages(arr, n, m) {
  // Write your code here.

  if (m > n) {
    return -1;
  }

  const maxPage = Math.max(...arr);

  const totalPage = arr.reduce((acc, val) => acc + val);

  function studentAllocate(arr, page) {
    let student = 1;
    let pageSum = 0;

    for (let x of arr) {
      if (pageSum + x <= page) {
        pageSum += x;
      } else {
        student += 1;
        pageSum = x;
      }
    }
    return student;
  }

  let l = maxPage;
  let r = totalPage;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const totalStudent = studentAllocate(arr, mid);

    if (totalStudent > m) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;

  // const maxPage = Math.max(...arr)

  // if (m > n) {
  //     return -1

  // }

  // function maxAllocate(arr,cap) {
  //     let student = 1

  //     let pageHold=0
  //     for (let x of arr) {

  //         if (pageHold+x <=cap) {

  //             pageHold+=x
  //         }
  //         else {
  //             student += 1
  //             pageHold=x
  //         }

  //     }
  //     return student
  // }

  // for (let i = maxPage; i<= maxPage * m; i++){
  //     const ans = maxAllocate(arr, i)

  //     if (ans == m) {
  //         return i
  //     }
  // }
}

module.exports.findPages = findPages;
