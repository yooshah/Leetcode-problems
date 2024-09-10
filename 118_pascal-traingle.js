// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function(numRows) {

//     if(numRows==1){  return [[1]]};

//     if (numRows==2){return [[1],[1,1]]}
//     let pascRes=[[1],[1,1]]
//     function pascalAdd(pasarr,arr){
//         arr.push(1)
//         for(let i=0;i<pasarr.length-1;i++){
//             let sum=pasarr[i]+pasarr[i+1]
//             arr.push(sum)
//         }
//         arr.push(1)

//     }
//     for(let i=2;i<numRows;i++){

//         let res=[]
//         pascalAdd(pascRes[i-1],res)

//         pascRes.push(res)
//         }

//      return pascRes
//     }

/// solution -2
{
  function combination(r, res) {
    let ans = 1;
    res.push(ans);
    for (let i = 1; i < r; i++) {
      ans *= r - i;
      ans /= i;
      res.push(ans);
    }
  }

  let pasRes = [];
  for (let row = 1; row <= numRows; row++) {
    let res = [];
    combination(row, res);
    pasRes.push(res);
  }
  return pasRes;
}
