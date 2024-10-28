var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let mapST = {};
  let mapTS = {};
  const n = s.length;

  for (let i = 0; i < n; i++) {
    c1 = s[i];
    c2 = t[i];
    if (
      (mapST[c1] != undefined && mapST[c1] != c2) ||
      (mapTS[c2] != undefined && mapTS[c2] != c1)
    ) {
      return false;
    }
    mapST[c1] = c2;
    mapTS[c2] = c1;
  }

  return true;

  //     for(let i=0;i<n;i++){

  //         if(freq1[s[i]]==undefined ){
  //             freq1[s[i]]=String(i)

  //         }
  //         else{
  //             freq1[s[i]]=String(freq1[s[i]])+String(i)
  //         }
  //         if(freq2[t[i]]==undefined ){
  //             freq2[t[i]]=String(i)

  //         }
  //         else{
  //             freq2[t[i]]=String(freq2[t[i]])+String(i)
  //         }
  //     }

  //     if(freq1.length!==freq2.length){
  //         return false
  //     }
  //    console.log(freq1,freq2)
  //    const sIndex=Object.values(freq1).toString()
  //    const tIndex=Object.values(freq2).toString()
  //   if(sIndex !==tIndex){
  //     return false
  //   }
  // return true
};
