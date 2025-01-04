var maxScore = function (cardPoints, k) {
  // const n=cardPoints.length

  // let maxSum=0;

  // for(let x=0;x<k+1;x++){
  // let lSum=0;
  // let rSum=0;

  // for(let i=0;i<k-x;i++){
  //     lSum+=cardPoints[i]

  // }

  // for(let j=0;j<x;j++){
  //     rSum+=cardPoints[n-j-1]
  // }

  // maxSum=Math.max(lSum+rSum,maxSum);

  // }

  // return maxSum

  const n = cardPoints.length;

  let maxSum = 0;
  let lSum = 0;
  let rSum = 0;
  for (let x = 0; x < k; x++) {
    lSum += cardPoints[x];
  }
  maxSum = lSum;
  let right = n - 1;

  for (let i = 1; i < k + 1; i++) {
    lSum -= cardPoints[k - i];
    rSum += cardPoints[n - i];
    maxSum = Math.max(lSum + rSum, maxSum);
  }

  return maxSum;
};
