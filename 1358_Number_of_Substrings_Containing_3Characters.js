/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  // const n=s.length;
  // let res=0;

  // for(let i=0;i<n;i++){
  //      let dict={};
  //     for(let j=i;j<n;j++ ){

  //         dict[s[j]]=(dict[s[j]] || 0)+1;

  //         if(Object.keys(dict).length==3){
  //             res+=1
  //         }

  //     }
  //     console.log(dict)
  // }
  // return res

  let l = 0;
  let r = 0;
  const n = s.length;

  let dict = {};

  let res = 0;

  while (r < n) {
    dict[s[r]] = r;

    let minPoint = r;

    if (Object.keys(dict).length == 3) {
      for (let x in dict) {
        minPoint = Math.min(dict[x], minPoint);
      }

      res += minPoint + 1;
    }
    r++;
  }

  return res;
};
