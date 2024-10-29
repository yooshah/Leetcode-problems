var isAnagram = function (s, t) {
  let hashMap1 = {};
  let hashMap2 = {};
  const n = s.length;
  const m = t.length;

  if (m !== n) {
    return false;
  }

  for (i = 0; i < n; i++) {
    if (hashMap1[s[i]] == undefined) {
      hashMap1[s[i]] = 1;
    } else {
      hashMap1[s[i]] = hashMap1[s[i]] + 1;
    }
    if (hashMap2[t[i]] == undefined) {
      hashMap2[t[i]] = 1;
    } else {
      hashMap2[t[i]] = hashMap2[t[i]] + 1;
    }
  }

  if (hashMap1.length !== hashMap2.length) {
    return false;
  }
  // console.log(hashMap1,hashMap2)
  for (let x in hashMap1) {
    if (hashMap1[x] != hashMap2[x]) {
      console.log("Hi");
      return false;
    }
  }
  return true;

  // let  res1=s.split("")
  // let  res2=t.split("")

  // res1=res1.sort().join()
  // res2=res2.sort().join()

  // return res1==res2
};
