function segregateElements(arr, n) {
  //code here
  let negativeNo = [];
  let positiveNo = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) negativeNo.push(arr[i]);
    else positiveNo.push(arr[i]);
  }
  let result = positiveNo.concat(negativeNo);
  return result;
}
let arr = [1, -1, 3, 2, -7, -5, 11, 6];
console.log(segregateElements(arr, arr.length));
