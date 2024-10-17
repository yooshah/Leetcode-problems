/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const maxEat = Math.max(...piles);
  let minEat = maxEat;
  let l = 0;
  let r = maxEat;

  function kokoEat(arr, rate) {
    let hour = 0;
    for (let x of arr) {
      hour += Math.ceil(x / rate);
    }
    return hour;
  }

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const timetake = kokoEat(piles, mid);

    if (timetake <= h) {
      minEat = Math.min(minEat, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return minEat;

  //     const maxEat=Math.max(...piles)

  //     function kokoRate(arr,rate){
  //     let hour=0
  //     for( x of arr){
  //         hour+=Math.ceil(x/rate)
  //     }
  //          console.log(hour)

  //     return hour
  // }

  //    for(let i=1;i<maxEat+1;i++){

  //     const minRate=kokoRate(piles,i)
  //     if(minRate<=h){
  //         return
  //     }
  //    }
};
