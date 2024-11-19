let nCopy = n;

if (n <= 0) {
  return false;
}

while (nCopy >= 1) {
  if (nCopy == 1) {
    return true;
  } else if (nCopy % 2 !== 0) {
    return false;
  } else {
    nCopy = nCopy / 2;
  }
}
