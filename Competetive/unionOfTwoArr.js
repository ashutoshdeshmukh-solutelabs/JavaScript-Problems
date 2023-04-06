function doUnion(a, n, b, m) {
  // code here
  let union = new Set();
  let tmpArr = a.concat(b);
  for (let i = 0; i < tmpArr.length; i++) {
    union.add(tmpArr[i]);
  }
  return union.size;
}

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3];
console.log(doUnion(a, a.length, b, b.length));
